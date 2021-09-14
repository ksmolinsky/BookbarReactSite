import React, {Component} from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
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
                                <CardImg top width="100%" src="/assets/britvanishing.webp" alt="Brit Bennett Event" />
                                <CardBody>
                                    <CardTitle tag="h5">Brit Bennett Reading</CardTitle>
                                    <CardSubtitle tag="h6">October 5th</CardSubtitle>
                                    <CardText>Best selling author, <strong>Brit Bennett</strong> will be in our bookstore giving a reading of her best selling book, <em>The Vanashing Half</em>, as well as doing a Q&A and signing.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col mb={3}>
                            <Card>
                                <CardImg top width="100%" src="/assets/britvanishing.webp" alt="Brit Bennett Event" />
                                <CardBody>
                                    <CardTitle tag="h5">Brit Bennett Reading</CardTitle>
                                    <CardSubtitle tag="h6">October 5th</CardSubtitle>
                                    <CardText>Best selling author, <strong>Brit Bennett</strong> will be in our bookstore giving a reading of her best selling book, <em>The Vanashing Half</em>, as well as doing a Q&A and signing.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col mb={3}>
                            <Card>
                                <CardImg top width="100%" src="/assets/britvanishing.webp" alt="Brit Bennett Event" />
                                <CardBody>
                                    <CardTitle tag="h5">Brit Bennett Reading</CardTitle>
                                    <CardSubtitle tag="h6">October 5th</CardSubtitle>
                                    <CardText>Best selling author, <strong>Brit Bennett</strong> will be in our bookstore giving a reading of her best selling book, <em>The Vanashing Half</em>, as well as doing a Q&A and signing.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default Events