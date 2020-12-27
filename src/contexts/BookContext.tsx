import React, { createContext, useState } from 'react';
import { nanoid } from 'nanoid';

interface ContextState {
  books: {
    title: string;
    author: string;
    id: string;
  }[];
  addBook: (title: string, author: string) => void;
  removeBook: (id: string) => void;
}

export const BookContext = createContext({} as ContextState);

export const BookContextProvider = ({
  children
}: React.PropsWithChildren<{}>) => {
  const [books, setBooks] = useState([
    { title: 'name og the wind', author: 'patrick rothfuss', id: '1' },
    { title: 'the final empire', author: 'brandon sanderson', id: '2' }
  ]);

  const addBook = (title: string, author: string) => {
    setBooks([...books, { title: title, author: author, id: nanoid() }]);
  };

  const removeBook = (id: string) => {
    setBooks(books.filter(book => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};
