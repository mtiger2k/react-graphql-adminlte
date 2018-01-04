import { createWriteStream, unlinkSync } from 'fs'
import { PubSub, withFilter } from 'graphql-subscriptions';
import { all } from 'promises-all'

require('dotenv').config();

const pubsub = new PubSub();
const channels = [
  {
    id: '1',
    name: 'baseball',
    messages: [
      {
        id: '1',
        text: 'baseball is life'
      }
    ]
  }
];
let nextId = 2;
let nextMessageId = 2;

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
    channel: (root, { id }) => {
      return channels.find(channel => channel.id === id);
    }
  },
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = {
        id: String(nextId++),
        name: args.name,
        messages: []
      };
      channels.push(newChannel);
      return newChannel;
    },
    addMessage: (root, { message }) => {
      const channel = channels.find(
        channel => channel.id === message.channelId
      );
      if (!channel) throw new Error('Channel does not exist');

      const newMessage = { id: String(nextMessageId++), text: message.text };
      channel.messages.push(newMessage);

      pubsub.publish('messageAdded', {
        messageAdded: newMessage,
        channelId: message.channelId
      });

      return newMessage;
    },
    singleUpload: async (root, { file }) => {
      await processUpload(file);
      return {result: 'success'};
    },
    multipleUpload: async (root, { files }) => {
      const { resolve, reject } = await all(files.map(processUpload))
      if (reject.length) {
        reject.forEach(({ name, message }) =>
          // eslint-disable-next-line no-console
          console.error(`${name}: ${message}`)
        )
      }    
      return { result: 'success' };
    }
  },
  Subscription: {
    messageAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator('messageAdded'),
        (payload, variables) => {
          return payload.channelId === variables.channelId;
        }
      )
    }
  }
};

const processUpload = async (upload) => {
  const { stream, filename, mimetype, encoding } = await upload;
  const { path } = await storeFS({ stream, filename });
}

const uploadDir = process.env.UPLOAD_DIR;

const storeFS = ({ stream, filename }) => {
  const path = `${uploadDir}/${filename}`
  return new Promise((resolve, reject) =>
    stream
      .on('error', error => {
        if (stream.truncated)
          // Delete the truncated file
          unlinkSync(path)
        reject(error)
      })
      .on('end', () => resolve({ path }))
      .pipe(createWriteStream(path))
  )
}
