import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../styles/header.css';

export default function Header({ pagename, completeSearch }) {
  const history = useHistory();
  const [isShowSearchBar, setIsShowSearchBar] = useState(false);

  function buttonSearch() {
    return (
      <input
        type="image"
        onClick={ () => setIsShowSearchBar(!isShowSearchBar) }
        src={ searchIcon }
        data-testid="search-top-btn"
        aria-label="search-input"
        alt="search icon"
        id="search-icon"
      />
    );
  }
  return (
    <>
      <header className="header">
        <input
          type="image"
          src={ profileIcon }
          alt="profile icon"
          data-testid="profile-top-btn"
          onClick={ () => history.push('/perfil') }
        />
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
