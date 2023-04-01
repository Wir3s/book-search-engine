import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user {
  user {
    _id
    email
    mybooks {
      authors
      bookId
      description
      image
      link
      title
    }
    password
    username
  }
}
`;