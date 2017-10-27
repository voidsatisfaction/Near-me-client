import React, { Component } from 'react';

export default class Page1 extends Component {
  render() {
    return (
      <div>
        <h1>Page1!</h1>
        <p>This is page1</p>
        <p>{this.props.match.params.username}, hi!</p>
      </div>
    );
  }
}