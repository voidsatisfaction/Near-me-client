import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const Post = ({ match }) => {
  return (
    <h2>
      {match.params.title}
    </h2>
  )
}

export default class Page2 extends Component {
  render() {
    return (
      <div>
        <h1>Page2!</h1>
        <p>Posts...</p>
        <Link to="/page2/react">React</Link>
        <Link to="/page2/redux">Redux</Link>
        <Link to="/page2/relay">Relay</Link>
        <Route 
          path="/page2/:title"
          component={Post}
        />
      </div>
    );
  }
}