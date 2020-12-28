import React from 'react';
import { BookContextProvider } from './contexts/BookContext';
import { Navbar } from './components/Navbar';
import { BookList } from './components/BookList';
import { NewBookForm } from './components/BookForm';
import { PortfolioLink } from './components/PortfolioLink';

function App() {
  return (
    <>
      <PortfolioLink />
      <div className='App'>
        <BookContextProvider>
          <Navbar />
          <BookList />
          <NewBookForm />
        </BookContextProvider>
      </div>
    </>
  );
}

export default App;
