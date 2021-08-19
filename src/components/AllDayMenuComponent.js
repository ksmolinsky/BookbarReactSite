import React, { Component } from 'react';
import { FadeTransform } from 'react-animation-components';

class AllDayMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'React'
        }
    }
    render () {
        return(
            <React.Fragment>
                <FadeTransform
                         in
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(50%)'
                            }}>
                <div className="container my-3 py-3 border border-dark bg-light">
                <h1 className="menu-main">All Day</h1>
                <div className="row">
                    <div className="col-6">
                        <h1 className="menu-title">Starters</h1>
                        <h2>Charcutierie Board</h2>
                        <p>artisan meats, cheeses, olives, nuts, bread</p>
                        <h2>Bavarian Pretzel</h2>
                        <p>served with beer cheese</p>
                        <h2>Hickory Smoked Chicken Wings</h2>
                        <p>Choice of Buffalo, Garlic Parmesean or Spicy Thai sauce.</p>
                        <h2>Fried Pickes</h2>
                        <p>house made pickle chips with chipotle alioli</p>
                        <h1 className="menu-title">Sandwiches</h1>
                        <h2>Reuben</h2>
                        <p>corned beef, swiss cheese, sauerkraut, 1000 dressing with fries</p>
                        <h2>Chicken BLAT</h2>
                        <h2>Smokehouse Burger</h2>
                        <h2>French Dip</h2>
                        <h2>Cubano</h2>
                    </div>
                    <div className="col-6">
                        <h1 className="menu-title">Plates</h1>
                        <h2>Fish and Chips</h2>
                        <p>beer-battered cod, fries, tarter sauce</p>
                        <h2>Boneless Short Ribs</h2>
                        <p>garlic mashed potatoes, broccoli</p>
                        <h2>Nashville Fried Chicken</h2>
                        <p>served with pickles and potato salad</p>
                        <h2>Lobster Mac N Cheese</h2>
                        <h1 className="menu-title">Drinks</h1>
                        <h2>Beer</h2>
                        <h2>Wine</h2>
                        <h2>Moscow Mule</h2>
                        <h2>Old Fashioned</h2>
                        <h2>Gin and Tonic</h2>
                    </div>
                </div>
            </div>
            </FadeTransform>
        </React.Fragment>
        )
    }
}

export default AllDayMenu;