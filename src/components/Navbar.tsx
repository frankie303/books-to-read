import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

export const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Reading list</h1>
      <p>You have {books.length} books to read</p>
    </div>
  );
};
