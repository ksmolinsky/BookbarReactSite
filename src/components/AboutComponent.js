import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';


class AboutUs extends Component {
    constructor(props) {
    super(props);
    this.state={

    };
    };
    render() {
        return (
            <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="OurStoryTitle text-center">Our Story</h1>
                        <p className="event-info">Since 1989, we have open our doors to peopple who bleieved in more than a booksotre. Our Customers love to come here becauase not only due we sell books but food and drink and a community atomosphere to go with it. We believe a love for books doesn't need to be a singular experience but a community atomosphere where we can discuss our favorite literary moments through food, drink and conversation. Throughout the last 30 plus years, Denver has gone a drastic transformation but has never lost its love for books and community. We love our community and in kind gladly donate 10% of all proceeds to the Boys and Girls Club of Denver to help this community grow. We hope you all enjoy our establishment whether it be in person or online shopping. Stay Safe Denver!</p>
                    </div>
                </div>
                <div class="row">
                    <div className="col">
                        <Card>
                            <CardBody className="text-center ">
                                <blockquote className="blockquote card-body">
                                    <p className="mb-0">Pouring out liquor is like burning books.</p>
                                    <footer className="blockquote-footer">William Faulkner</footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="OurStoryTitle text-center">Location and Contact info</h2>
                    </div>
                    <div className="col-6"> 
                        <h2>Address</h2>
                        <a className="btn btn-link" href="https://goo.gl/maps/GbNkhVdp5B1pat2PA">
                        14052 E Iowa Dr <br/>
                         Aurora, CO 80012 <br/>
                        </a>
                        <h2>Bookstore Information</h2>
                        <a role="button" className="btn btn-md btn-link" href="tel:+13032334455">(303)-233-4455<i className="fa fa-phone"></i></a>
                        <br/>
                        <a role="button" className="btn btn-link" href="mailto:kbookstore@gmail.com">kbookstore@gmail.com<i className="fa fa-envelope-o"></i></a>
                        <h2>Restaurant Information</h2>
                        <a role="button" className="btn btn-link" href="tel:+13032334456">(303)233-4456<i className="fa fa-phone"></i></a>
                        <br/>
                        <a role="button" className="btn btn-link" href="mailto:krestaurant@gmail.com">krestaurant@gmail.com<i className="fa fa-envelope-o"></i></a>
                        <h2>Events Information</h2>
                        <a role="button" className="btn btn-link" href="tel:13032334456">(303)233-4456<i className="fa fa-phone"></i></a>
                        <br/>
                        <a role="button" className="btn btn-link" href="mailto:krestaurant@gmail.com">krestauraunt@gmail.com<i className="fa fa-envelope-o"></i></a>
                    </div>
                    <div class="col-6">
                        <div className="directions">
                            <h2>By Metro:</h2>
                            <p className="event-info">Take the R Line up to the Florida Station and walk 1 block to the store</p>
                        </div>
                        <div class="directions">
                            <h2>By Car:</h2>
                            <p className="event-info">Take I-25 to I-225 and turn left at the Florida light. The bookstore will be on your left.</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
};

export default AboutUs