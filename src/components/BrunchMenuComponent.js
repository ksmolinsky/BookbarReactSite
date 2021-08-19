import React, { Component } from 'react';
import { FadeTransform } from 'react-animation-components';

class BrunchMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'React'
        }
    }
    
    render() {
        return (
        <React.Fragment>
            <FadeTransform
                         in
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(50%)'
                            }}>
            <div className="container my-3 py-3 border border-dark bg-light">
            <h1 className="menu-main">Brunch</h1>
            <h2 className="menu-title">Everyday until 1PM</h2>
            <div className="row">
                <div className="col-6">
                    <h1 className="menu-title">Plates</h1>
                    <h2>Irish Benedict</h2>
                    <p>Corned Beef, English Muffin, Hollandaise Sauce</p>
                    <h2>Chicken and Waffles</h2>
                    <p>Golden Belgian waffles, fried chicken, honey mustard</p>
                    <h2>Steak and Eggs</h2>
                    <p>8 oz. NY Strip, two eggs, toast</p>
                    <h2>Bagel Sandwich</h2>
                    <p>Fried egg, bacon, cheddar cheese, bagel</p>
                    <h2>Breakfast Burrito</h2>
                    <p>Flour tortilla, eggs, sausage, bacon, potatoes and chedder cheese.</p>
                    <h2>French Toast</h2>
                    <p>Three fluffly, golden slices of french toast served with fruit assortment and syrup.</p>
                    <h2>Biscuits and Gravy</h2>
                    <p>Fresh Golden baked bisuits topped with country sausage gray and served with hash browns.</p>
                </div>
                <div className="col-6">
                    <h1 className="menu-title">Cocktails</h1>
                    <h2>Mimosa</h2>
                    <h2>Bloody Mary</h2>
                    <h2>Tequila Sunrise</h2>
                    <h2>Sangria</h2>
                    <h2>Bellini</h2>
                    <hr />
                    <h1 className="menu-title">Sides</h1>
                    <h2>Applewood Bacon</h2>
                    <h2>Sausage Links</h2>
                    <h2>Hashbrowns</h2>
                    <h2>Coffee</h2>
                    </div>
                </div>
            </div>
            </FadeTransform>
        </React.Fragment>
        )
    }
}

export default BrunchMenu;