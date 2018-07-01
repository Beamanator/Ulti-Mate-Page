import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Page1 from './containers/Page1/Page1';
import Page2 from './containers/Page2/Page2';
import Home from './containers/Home/Home';

import './App.css';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/p1" component={Page1} />
                <Route path="/p2" component={Page2} />
            </Switch>
        );
    }
}

export default App;
