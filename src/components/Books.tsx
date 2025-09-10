'use client';

import { useQuery } from '@apollo/client/react';
import { GET_BOOKS } from '@/lib/graphql/queries';
import { BooksData, BookVars } from '@/lib/graphql/types';

export function Books() {
  const { loading, error, data } = useQuery<BooksData, BookVars>(GET_BOOKS, {
    variables: { limit: 10 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Books</h2>
      <ul className="space-y-2">
        {data?.books.map((book) => (
          <li key={book.id} className="border p-3 rounded">
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-gray-600">by {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
