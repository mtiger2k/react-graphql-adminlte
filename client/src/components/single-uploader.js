import React from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import FileInput from './file-input'
//import uploadsQuery from '../queries/uploads'

const SingleUploader = ({ mutate }) => {
  const handleChange = ({ target }) =>
    target.validity.valid &&
    mutate({
      variables: { file: target.files[0] },
      /*update: (proxy, { data: { singleUpload } }) => {
        const data = proxy.readQuery({ query: uploadsQuery })
        data.uploads.push(singleUpload)
        proxy.writeQuery({ query: uploadsQuery, data })
      }*/
    }).then(({ data }) => {
      console.log('got data', data);
    }).catch((error) => {
      console.log('there was an error sending the query', error);
    });

  return <FileInput required onChange={handleChange} />
}

export default graphql(gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      result
    }
  }
`)(SingleUploader)