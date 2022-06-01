import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Restaurant from './RestaurantComponent';
import Events from './EventComponent';
import Shop from './Shop';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



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
                  <Route path='/restaurant' component={Restaurant} />
                  <Route path='/events' component={Events} />
                  <Route path='/shop' component={Shop} />
                  <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )

    }
}
export default withRouter(Main);