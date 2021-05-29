import React, { Component } from 'react';
import { Card, CardBody, Button } from 'reactstrap';


class AboutUs extends Component {
  

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
                        <Button className="btn" href="https://goo.gl/maps/GbNkhVdp5B1pat2PA">
                        14052 E Iowa Dr <br/>
                         Aurora, CO 80012 <br/>
                        </Button>
                        <h2>Bookstore Information</h2>
                        <Button className="btn" href="tel:+13032334455">(303)-233-4455</Button>
                        <br/>
                        <Button className="btn" href="mailto:kbookstore@gmail.com">kbookstore@gmail.com</Button>
                        <h2>Restaurant Information</h2>
                        <Button className="btn" href="tel:+13032334456">(303)233-4456</Button>
                        <br/>
                        <Button className="btn" href="mailto:krestaurant@gmail.com">krestaurant@gmail.com</Button>
                        <h2>Events Information</h2>
                        <Button className="btn" href="tel:13032334456">(303)233-4456</Button>
                        <br/>
                        <Button className="btn" href="mailto:krestaurant@gmail.com">krestauraunt@gmail.com</Button>
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
            <div className="container">
                <div className="row">
                    <div className="col" map>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12282.029338085242!2d-104.82904720719446!3d39.683295646168666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c7bf6ce3f94eb86!2sFlorida%20Station%20Apartments!5e0!3m2!1sen!2sus!4v1615859196474!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
};

export default AboutUs