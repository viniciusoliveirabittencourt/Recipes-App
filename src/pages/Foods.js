import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export default class Foods extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Header pagename="Comidas" completeSearch />
      </div>
    );
  }
}

Foods.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
