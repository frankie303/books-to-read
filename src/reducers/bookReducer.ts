import { nanoid } from 'nanoid';

interface State {
  title: string;
  author: string;
  id: string;
}

export type ACTIONTYPE =
  | { type: 'ADD_BOOK'; payload: { title: string; author: string } }
  | { type: 'REMOVE_BOOK'; payload: { id: string } };

export const bookReducer = (state: State[], action: ACTIONTYPE) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          title: action.payload.title,
          author: action.payload.author,
          id: nanoid()
        }
      ];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.payload.id);
    default:
      return state;
  }
};
