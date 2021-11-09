import React, { useState } from 'react';
import SearchBar from './SearchBar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <button
          data-testid="search-top-btn"
          type="button"
          onClick={ () => setIsOpen(!isOpen) }
        >
          test
        </button>
      </header>
      <div style={ { display: isOpen ? 'block' : 'none' } }>
        <SearchBar />
      </div>
    </>
  );
}
