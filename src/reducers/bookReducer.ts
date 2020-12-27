import { nanoid } from 'nanoid';
import { Book } from '../contexts/BookContext';

export type ACTIONTYPE =
  | { type: 'ADD_BOOK'; book: { title: string; author: string } }
  | { type: 'REMOVE_BOOK'; book: { id: string } };

export const bookReducer = (state: Book[], action: ACTIONTYPE) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: nanoid()
        }
      ];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
};
