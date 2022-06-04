import React, { Component } from 'react';
import {Container, Row, Col, Breadcrumb, BreadcrumbItem, Alert, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import Product from './Product';
import { products } from '../shared/Products';
import { toast } from 'react-toastify';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products
        }

        this.toggleAlert = this.toggleAlert.bind(this);
        this.toggleToast = this.toggleToast.bind(this);

    }

    toggleAlert() {
        this.setState({
            isAlertOpen: !this.state.isAlertOpen
        })
    }

   toggleToast() {
        toast.success("This item has been added to your Shopping Cart!", {toastId: "addtocart", theme: "colored", hideProgressBar: true});
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
                            >
                            <Button color="success" size="lg" onClick={this.toggleToast}>Add to Cart</Button>
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

}





export default Shop