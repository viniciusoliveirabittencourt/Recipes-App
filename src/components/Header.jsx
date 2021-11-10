import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: false,
    };
    this.changeClick = this.changeClick.bind(this);
  }

  changeClick() {
    const { input } = this.state;
    this.setState({
      input: !input,
    });
  }

  fullHeader() {
    const { input } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={ this.changeClick }
          src={ searchIcon }
          data-testid="search-top-btn"
          aria-label="search-input"
        >
          <img
            src={ searchIcon }
            alt="search icon"
            id="search"
          />
        </button>

        { input && (
          <label
            htmlFor="search-input"
          >
            <input
              type="text"
              placeholder="Search"
              id="input-search"
              name="search-input"
              data-testid="search-input"
            />
          </label>)}
      </div>
    );
  }

  smallHeader() {
    return (
      <>
      </>
    );
  }

  render() {
    const { pagename, completeSearch } = this.props;

    return (

      <header>
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
        { completeSearch ? this.fullHeader() : this.smallHeader() }

      </header>
    );
  }
}

Header.propTypes = {
  location: Proptypes.shape({
    pathname: Proptypes.string,
  }).isRequired,
  pagename: Proptypes.string.isRequired,
  completeSearch: Proptypes.bool.isRequired,
};
