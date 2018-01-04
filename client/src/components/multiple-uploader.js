import React from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import FileInput from './file-input'
//import uploadsQuery from '../queries/uploads'

const MultipleUploader = ({ mutate }) => {
  const handleChange = ({ target }) =>
    target.validity.valid &&
    mutate({
      variables: { files: target.files },
      /*update: (proxy, { data: { multipleUpload } }) => {
        const data = proxy.readQuery({ query: uploadsQuery })
        data.uploads.push(...multipleUpload)
        proxy.writeQuery({ query: uploadsQuery, data })
      }*/
    }).then(({ data }) => {
      console.log('got data', data);
    }).catch((error) => {
      console.log('there was an error sending the query', error);
    });

  return <FileInput multiple required onChange={handleChange} />
}

export default graphql(gql`
  mutation($files: [Upload!]!) {
    multipleUpload(files: $files) {
      result
    }
  }
`)(MultipleUploader)