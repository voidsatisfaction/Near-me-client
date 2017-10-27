import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const logged = true;

export default class Mypage extends Component {
  render() {
    return (
      <div>
        Mypage
        {
          !logged && <Redirect to="/login" />
        }
      </div>
    );
  }
}