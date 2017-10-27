import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div>
        <h2>Search</h2>
        <p>{new URLSearchParams(this.props.location.search).get('keyword')}</p>
      </div>
    );
  }
}