import React, { Component } from 'react';
import Proptypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: false,
    };
    this.showInputSearch = this.showInputSearch.bind(this);
    this.changeClick = this.changeClick.bind(this);
  }

  componentDidMount() {
    const { completeSearch } = this.props;
    if (completeSearch === true) { this.showInputSearch(); }
  }

  componentDidUpdate() {
    this.showInputSearch();
  }

  showInputSearch() {
    const { input } = this.state;
    const inputSearch = document.querySelector('#input-search');
    if (input === true) {
      inputSearch.style.display = 'block';
    } else {
      inputSearch.style.display = 'none';
    }
  }

  changeClick() {
    const { input } = this.state;
    this.setState({
      input: !input,
    });
  }

  checkHeader() {
    return (<label
      htmlFor="search-input"
    >
      <button
        type="button"
        onClick={ this.changeClick }
        data-testid="search-top-btn"
        src={ searchIcon }
        id="search-input"
      />
      <img
        alt="search icon"
        id="search"
      />
      <input
        type="search"
        placeholder="Search"
        id="input-search"
        className="search-input"
        name="search-input"
        data-testid="search-input"
      />
            </label>
    );
  }

  render() {
    const { pagename, completeSearch } = this.props;

    return (

      <header>
        <img
          src={ profileIcon }
          alt="profile icon"
          data-testid="profile-top-btn"
        />
        <h1
          data-testid="page-title"
        >
          { pagename}
        </h1>
        { completeSearch ? this.checkHeader() : null }

      </header>
    );
  }
}

Header.propTypes = {
  location: Proptypes.shape({
    pathname: Proptypes.string,
  }).isRequired,
  pagename: Proptypes.string.isRequired,
};
