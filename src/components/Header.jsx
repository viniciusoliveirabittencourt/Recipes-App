import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../styles/header.css';

export default function Header({ pagename, completeSearch }) {
  const [isShowSearchBar, setIsShowSearchBar] = useState(false);

  function buttonSearch() {
    return (
      <button
        type="button"
        onClick={ () => setIsShowSearchBar(!isShowSearchBar) }
        src={ searchIcon }
        data-testid="search-top-btn"
        aria-label="search-input"
      >
        <img
          src={ searchIcon }
          alt="search icon"
          id="search-icon"
        />
      </button>
    );
  }
  return (
    <>
      <header className="header">
        <Link to="/perfil">
          <img
            src={ profileIcon }
            alt="profile icon"
            data-testid="profile-top-btn"
          />
        </Link>
        <h1
          data-testid="page-title"
        >
          { pagename}
        </h1>
        { completeSearch && buttonSearch() }
      </header>
      { isShowSearchBar && <SearchBar /> }
    </>
  );
}

Header.propTypes = {
  pagename: Proptypes.string.isRequired,
  completeSearch: Proptypes.bool,
};

Header.defaultProps = {
  completeSearch: false,
};
