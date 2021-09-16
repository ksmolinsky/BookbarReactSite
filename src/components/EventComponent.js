import React, {Component} from 'react';
import { Button, Container, Row, Col, Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import {Link} from 'react-router-dom';


class Events extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <Breadcrumb>
                                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Events</BreadcrumbItem>
                            </Breadcrumb>
                            <h2 className="breadcrumb-title">Upcoming Events</h2>
                            <hr />
                        </Col>
                    </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col mb={3}>
                                <Card>
                                    <CardImg className="eventimg" top src="/assets/britbennettthumb.jpg" alt="Brit Bennett Event" />
                                    <CardBody>
                                        <CardTitle tag="h5">Brit Bennett Reading</CardTitle>
                                        <CardSubtitle tag="h6">October 5th</CardSubtitle>
                                        <CardText>Best selling author, <strong>Brit Bennett</strong> will be in our bookstore giving a reading of her best selling book, <em>The Vanashing Half</em>, as well as doing a Q&A and signing.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col mb={3}>
                                <Card>
                                    <CardImg className="eventimg" top width="100%" src="/assets/wineandbook.jpg" alt="Food and Wine Thumbnail" />
                                    <CardBody>
                                        <CardTitle tag="h5">Food and Wine Literary Pairing</CardTitle>
                                        <CardSubtitle tag="h6">October 25th</CardSubtitle>
                                        <CardText>We will be serving four courses of food and wine that are referenced in classic works from F. Scott Fitszgerald, Ernest Hemingway and more. Call or email our bookstore to get your tickets now!</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col mb={3}>
                                <Card>
                                    <CardImg className="eventimg" top width="100%" src="/assets/rockmeonthewater.jpg" alt="brownstein thumb" />
                                    <CardBody>
                                        <CardTitle tag="h5">A conversation with Ronald Brownstein</CardTitle>
                                        <CardSubtitle tag="h6">November 7th</CardSubtitle>
                                        <CardText>Atlantic Journalist and best selling author, Ronald Brownstein will be in our bookstore to discuss his highly anticipated non-fiction book, Rock Me on The Water, which dives deep into the year 1974 as it relates to American culture and Politics.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className="breadcrumb-title">Host Your Own Event!</h2>
                                <hr/>
                                <img className="hosteventimg  img-thumbnail" src="assets/yourownevent.jpg"></img>
                                <p className="event-info">In our addition to our exciting planned events, we also offer our space up for people to host their own events if available. With a capacity to hold around 45 people, we offer a unique literary themed space to hold a variety of different events. Whether it be a small book club, a birthday party or a bridal shower we are able to meet many different needs. We are also able to cater both food and drinks!</p>
                                <p className="event-info">Fill out the form below with your event information and we will get back to you shortly with pricing and booking information!</p>
                                <Button className="btn-lg my-3 mx-3" color="success">Event Request Form</Button>
                            </Col>
                        </Row>
                    </Container>
                </React.Fragment>
            )
        }
    };

export default Events