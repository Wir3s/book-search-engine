import { gql } from '@apollo/client';

export const GET_ME = gql`
query me {
  me {
    _id
    bookCount
    email
    username
    mybooks {
      title
      link
      image
      description
      bookId
      authors
    }
  }
}
`;