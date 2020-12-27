import React, { useContext } from 'react';
import { Book } from '../contexts/BookContext';
import { BookContext } from '../contexts/BookContext';

export const BookDetails: React.FC<{ book: Book }> = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li
      onClick={() =>
        dispatch({ type: 'REMOVE_BOOK', payload: { id: book.id } })
      }
    >
      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
    </li>
  );
};
