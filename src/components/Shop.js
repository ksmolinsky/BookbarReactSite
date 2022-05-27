import React, { Component } from 'react';
import Product from './Product';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [

            ],
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <h4>Shop</h4>
                <div className="row">
                    {this.state.products.map((prod) => {
                        return(
                            <Product
                            key={prod.id}
                            product={prod}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                            >
                            <button className="btn btn-primary">Buy Now</button>
                            </Product>
                        )
                    })}
                </div>
            </div>
        )
    }

    componentDidMount = async () => {
        //fetch data from data source

        var response = await fetch("http://localhost:5001/product", {method: "GET"});
        var prods = await response.json();
        console.log(prods);

        this.setState({ products: prods });
        
        //console.log("componentDidMount-ShoppingCart")
    }

    handleIncrement = (product, maxValue) => {
        //get index of selected product
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if(allProducts[index].quantity < maxValue) {
        allProducts[index].quantity++;

        //update the state of the current component (parent component)
        this.setState({products: allProducts});

        }
    };

    handleDecrement = (product, minValue) => {
        //get index of selected product
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if(allProducts[index].quantity > minValue) {
        allProducts[index].quantity--;

        //update the state of the current component (parent component)
        this.setState({products: allProducts});
     };
    }

    handleDelete = (product) => {
        //get index of selected product
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if(window.confirm("are you sure to delete?")){

        //delete product based on index
        allProducts.splice(index, 1);

        //update the state of current component (parent component)
        this.setState({ products: allProducts});
        }
    }


}

export default Shop