import React, { Component } from 'react';
import { FadeTransform } from 'react-animation-components';

class HappyHourMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'React'
        }
    }
    render () {
        return(
            <FadeTransform
                         in
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(50%)'
                            }}>
                <div className="container my-3 py-3 border border-dark bg-light">
                    <div className="row">
                    <div className="col">
                        <h1 className="menu-main">Happy Hour</h1>
                        <h2 className="menu-title">Everyday from 3-5PM</h2>
                        <h3 className="happyhourdeals">Appetizers half price</h3>
                        <h3 className="happyhourdeals">plates and sandwhiches are 2$ off</h3>
                        <h3 className="happyhourdeals">draft beers 6$ </h3>
                        <h3 className="happyhourdeals">Can Beers are $5</h3>
                        <h3 className="happyhourdeals">Glasses of wine for $5</h3>
                        <h3 className="happyhourdeals">Half off Bottles of Wine</h3>
                        <h3 className="happyhourdeals">Cocktails are 1 dollar off</h3>
                        <h3 className="happyhourdeals">Any books bought are 20% off with food or drink purchase</h3>
                    </div>
                </div>
            </div>
        </FadeTransform>
        )
    }
}

export default HappyHourMenu;