import React, { Component } from 'react';
import {Container, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import Product from './Product';
import { products } from '../shared/Products';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products
        }
    }
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <Breadcrumb>
                                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Shop</BreadcrumbItem>
                            </Breadcrumb>
                            <h2 className="breadcrumb-title">Shop</h2>
                            <hr />
                        </Col>
                    </Row>
                </Container>
                <Container>
                <Row>
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
                </Row>
            </Container>
            </React.Fragment>
        )
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