import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/page/Home';
import Page1 from './components/page/Page1';
import Page2 from './components/page/Page2';
import MyPage from './components/page/MyPage';
import Login from './components/page/Login';
import Search from './components/page/Search';
import NotFound from './components/page/NotFound';

import Header from './components/organism/Header';

export default class App extends Component {
  state = {  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page1/:username" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/login" component={Login} />
            <Route path="/me" component={MyPage} />
            <Route path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}