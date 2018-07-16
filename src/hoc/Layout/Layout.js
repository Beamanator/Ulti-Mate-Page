import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';

import Header from '../../components/Navigation/Header/Header';
// import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    // state = {
    //     showSideDrawer: false
    // }
    
    // sideDrawerClosedHandler = () => {
    //     this.setState({
    //         showSideDrawer: false
    //     });
    // }

    // sideDrawerToggleHandler = () => {
    //     this.setState( prevState => {
    //         return { showSideDrawer: !prevState.showSideDrawer };   
    //     });
    // }

    render () {
        return (
            <Fragment>
                <Header
                    // drawerToggleClicked={this.sideDrawerToggleHandler}
                />
                {/* TODO: add Drawer? */}

                {/* Main content of the page below */}
                <main>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;

// const mapStateToProps = state => {
//     return {
//         isAuthenticated: state.auth.token !== null
//     };
// };

// export default connect(mapStateToProps, null)(Layout);