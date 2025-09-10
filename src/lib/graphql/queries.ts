import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query GetBooks($limit: Int) {
    books(limit: $limit) {
      id
      title
      author
    }
  }
`;
