import React, {Component, Option, Select} from 'react';
import { Button, ButtonGroup, Label, Input, Container, Row, Col, Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, Form, FormGroup} from 'reactstrap';
import {Link} from 'react-router-dom';


class Events extends Component {
    constructor(props) {
    super(props);
    this.state = {
        isModalOpen: false,
        setRSelected: null,
        rSelected: null
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.setRSelected = this.setRSelected.bind(this);
    }

    setRSelected(rSelected) {
        this.setState({ rSelected });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

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
                                <h2 className="breadcrumb-title">Host Your Own Event</h2>
                                <hr/>
                                <img className="hosteventimg  img-thumbnail" src="assets/yourownevent.jpg"></img>
                                <p className="event-info">In our addition to our exciting planned events, we also offer our space up for people to host their own events if available. With a capacity to hold around 45 people, we offer a unique literary themed space to hold a variety of different events. Whether it be a small book club, a birthday party or a bridal shower we are able to meet many different needs. We are also able to cater both food and drinks!</p>
                                <p className="event-info">Fill out the form below with your event information and we will get back to you shortly with pricing and booking information!</p>
                                <Button className="btn-lg my-3 mx-3" color="success" onClick={this.toggleModal}>Event Request Form</Button>
                            </Col>
                        </Row>
                    </Container>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader className="EventHeader" toggle={this.toggleModal}>Event Request Form</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup row>
                                    <Label htmlfor="name" sm={6}>Name</Label>
                                    <Input type="text" name="name" id="name" />
                                </FormGroup>
                                <FormGroup>
                                     <Label htmlfor="PhoneNumber">Contact Tel.</Label>
                                     <Input type="tel" name="tel" id="tel"/>
                                </FormGroup>
                                <FormGroup>
                                     <Label htmlfor="email">Email</Label>
                                     <Input type="email" name="email" id="email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlfor="eventSize">Event Size</Label>
                                    <Input type="number" name="eventSize" id="eventSize" /> 
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlfor="eventDate">Event Date</Label>
                                    <Input type="date" name="eventDate" id="eventDate" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlfor="eventTime">Event Time</Label>
                                    <Input type="time" name="eventTime" id="eventTime" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlfor="eventDur">Event Duration</Label>
                                    <Input type="select" name="eventDur" id="eventDur">
                                        <option>Select</option>
                                        <option value="1">1 Hr</option>
                                        <option value="2">2 Hr</option>
                                        <option value="3">3 Hr</option>
                                        <option value="4">4 Hr</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlfor="Catering" sm={6}>Catering</Label>
                                        <ButtonGroup >
                                            <Button color="success" value="Food" onClick={() => this.setRSelected("Drinks")} active={this.state.rSelected === "Food"}>Food</Button>
                                            <Button color="info"  value="Drinks" onClick={() => this.setRSelected("Food")} active={this.state.rSelected === "Drinks"} >Drinks</Button>
                                            <Button value="Both"  onClick={() => this.setRSelected("Both")} active={this.state.rSelected === "Both"}>Both</Button>
                                            <Button value="Neither" onClick={() => this.setRSelected("Neither")} active={this.state.rSelected === "Neither"}>Neither</Button>
                                        </ButtonGroup>
                                </FormGroup>
                                    <Button type="submit" value="submit" color="success">Request Info</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </React.Fragment>
            )
        }
    };

export default Events