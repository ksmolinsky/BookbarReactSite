import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardImg, Col } from 'reactstrap';

class Product extends Component {

    constructor(props) {
        super(props);

        console.log("Constructor - Product");

        this.state = {
            product: this.props.product,
        };
    }
  

    render() {
        console.log("render - Product");

        return (
            <Col>
                <Card className="m-5">
                    <CardBody>
                        <div className="text-muted"> # {this.state.product.id}
                        <span className="pull-right hand-icon" onClick={()=> {this.props.onDelete(this.state.product)}}>
                            <i className="fa fa-times"></i>
                        </span>
                        </div>

                        <h5 className="pt-2 border-top">{this.state.product.productName}</h5>

                        <div>$ {this.state.product.price}</div>
                        <img className='eventimg' src={this.state.product.image} />
                    </CardBody>
                    <CardFooter className="text-right">
                        <div className="float-left">
                            <span className="badge">{this.state.product.quantity}</span>

                            <div className="btn-group">
                                <button 
                                className="btn btn-outline-success" 
                                onClick={() => {this.props.onIncrement(this.state.product, 10); 
                                }}
                                >
                                    +
                                    </button>
                                <button 
                                className="btn btn-outline-success" 
                                onClick={() => {this.props.onDecrement(this.state.product, 0); 
                                }}
                                >
                                    -
                                    </button>
                            </div>
                        </div>
                        <div className="float-right">{this.props.children}</div>
                    
                    </CardFooter>
                </Card>
        </Col>
        );
    }
}

export default Product