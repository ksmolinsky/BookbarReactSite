import React from 'react';
import { Link } from 'react-router-dom';
import { Label, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 >Links</h4>
                        <ul className="list-unstyled">
                            <li><Link to="/home" className="footer-links">Home</Link></li>
                            <li><Link to="/aboutus" className="footer-links">About Us</Link></li>
                            <li><Link to="/restaurant" className="footer-links">Restaurant</Link></li>
                            <li><Link to="/events" className="footer-links">Events</Link></li>
                            <li><Link to="/shop" className="footer-links">Shop</Link></li>
                        </ul>
                    </div>
                    <div className="col text-center">
                        <h4>Social</h4>
                        <a className="btn btn-social-icon" href="http://instagram.com/"><i
                        className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon" href="http://facebook.com/"><i
                        className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon" href="http://twitter.com/"><i
                        className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon" href="http://yelp.com/"><i
                        className="fa fa-yelp"></i></a>
                    </div>
                    <div className="col text-center">
                        <h5>Newsletter</h5>
                        <LocalForm>
                            <Label htmlFor="email" md={3}></Label>
                            <Control.text model=".email" name="email" id="email" placeholder="Email Address"
                            validators={{
                                required,
                                validEmail
                            }}
                            />
                            <Errors 
                                className="text-danger"
                                model=".email"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required',
                                    validEmail: 'Invalid Email Address'
                                }}
                                />
                                <Button className="btn-sm btn-secondary ml-2 mb-2">Sign up</Button>
                        </LocalForm>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;