import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

export const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', book: { title, author } });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='book title'
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        required
      />
      <input
        type='text'
        placeholder='author'
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type='submit' value='add book' />
    </form>
  );
};
