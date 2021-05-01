import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



const mapStateToProps = state => {
    return {
    
    };
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={};
    };

    render() {
        return (
            <div>
                <Header />
                <Switch>
                  <Route path='/home' component={Home} />
                  <Route path='/aboutus' component={About} />
                  <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )

    }
}
export default withRouter(connect(mapStateToProps)(Main));