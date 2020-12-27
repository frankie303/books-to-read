import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';
import { ACTIONTYPE } from '../reducers/bookReducer';

export interface Book {
  title: string;
  author: string;
  id: string;
}

export interface ContextState {
  books: Book[];
  dispatch: React.Dispatch<ACTIONTYPE>;
}

export const BookContext = createContext({} as ContextState);

export const BookContextProvider = ({
  children
}: React.PropsWithChildren<{}>) => {
  const [books, dispatch] = useReducer(bookReducer, []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};
