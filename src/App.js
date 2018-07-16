import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Page1 from './containers/Page1/Page1';
import Page2 from './containers/Page2/Page2';
import Home from './containers/Home/Home';

import Layout from './hoc/Layout/Layout';

import './App.css';

class App extends Component {
    // TODO: Add auto authentication attempts
    // componentDidMount() {
    //     this.props.onTryAutoSignin();
    // }

    render() {
        let routes = (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/p1" component={Page1} />
                <Route path="/p2" component={Page2} />
            </Switch>
        );

        // TODO: add new set of routes if authenticated
        // -> Useful if we want to restrict admin pages (for example)
        // if (this.props.isAuthenticated) {...}

        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}

export default App;
