import React, { Component } from 'react';
import { Button, ButtonDropdown, ButtonGroup, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, Form, FormGroup, Row, Container, Col, Breadcrumb, BreadcrumbItem, Media, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import AllDayMenu from './AllDayMenuComponent';
import BrunchMenu from './BrunchMenuComponent';
import HappyHourMenu from './HappyHourMenuComponent';
import { FadeTransform } from 'react-animation-components';



class Restaurant extends Component {
    constructor(props){
    super(props);
    this.state = {
        showBrunchMenu: false,
        showAllDayMenu: false,
        showHHMenu: false,
        dropdownOpen: false,
        isModalOpen: false,
        setRSelected: null,
        rSelected: null
        }
    this.showMenu = this.showMenu.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.setRSelected = this.setRSelected.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    }

    setRSelected(rSelected) {
        this.setState({ rSelected });
    }
    
    showMenu(name) {
        switch(name) {
            case "showBrunchMenu":
                this.setState({ showBrunchMenu: true, showAllDayMenu: false, showHHMenu: false })
                break;
            case "showAllDayMenu":
                this.setState({ showAllDayMenu: true, showBrunchMenu: false, showHHMenu: false })
                break;
            case "showHHMenu":
                this.setState({ showHHMenu: true, showBrunchMenu: false, showAllDayMenu: false })
                break;
            default: ;
        }
    }



    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }


    handleReservation(event) {
        alert("Your Reservation is booked!");
        this.toggleModal();
        event.preventDefault();
        
    }

    render() {
        const { showBrunchMenu, showAllDayMenu, showHHMenu } = this.state;
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <Breadcrumb>
                                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Restaurant</BreadcrumbItem>
                            </Breadcrumb>
                            <h2 className="breadcrumb-title">Restaurant</h2>
                            <hr />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="main-container">
                        <Col className="class-col">
                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="my-3 mx-3" size="lg">
                                <DropdownToggle caret color="success" >
                                    Menus
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => this.showMenu("showBrunchMenu")} href="#showMenu">Brunch</DropdownItem>
                                    <DropdownItem onClick={() => this.showMenu("showAllDayMenu")} href="#showMenu">All Day</DropdownItem>
                                    <DropdownItem onClick={() => this.showMenu("showHHMenu")} href="#showMenu">Happy Hour</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </Col>
                        <Col className="class-col">
                            <Button className="btn-lg my-3 mx-3" color="primary" onClick={this.toggleModal}>Reservations</Button>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="main-container">
                        <Col className="col-md restaurant-img">
                        <Media object width="75%" height="75%" className=" mx-4 mt-4" src="assets/bookbarpatio.jpg" />
                        </Col>
                    </Row>
                </Container>
                <Container id="showMenu">
                    <Row>
                        <Col >
                        <FadeTransform
                         in
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(50%)'
                            }}>
                            {showBrunchMenu && <BrunchMenu /> },
                            {showAllDayMenu && <AllDayMenu />},
                            {showHHMenu && <HappyHourMenu />}
                        </FadeTransform>
                        </Col>
                    </Row>
                </Container>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className="ReservationHeader" toggle={this.toggleModal}>Reserve A Table</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleReservation}>
                            <FormGroup row>
                                <Label htmlfor="partysize" sm={6}>Party Size</Label>
                                <Col sm={6}>
                                    <Input type="select" name="partysize" id="partysize">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="date" sm={6}>Date</Label>
                                <Col sm={6}>
                                    <Input type="date" name="date" id="date" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="time" sm={6}>Time</Label>
                                <Col sm={6}>
                                    <Input type="time" name="time" id="time"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="seatingpreference" sm={6}>Seating Preference</Label>
                                <Col sm={6}>
                                    <ButtonGroup >
                                        <Button color="success" value="sitinside" onClick={() => this.setRSelected("sitinside")} active={this.state.rSelected === "sitinside"}>Inside</Button>
                                        <Button color="info"  value="sitoutside" onClick={() => this.setRSelected("sitoutside")} active={this.state.rSelected === "sitoutside"} >Outside</Button>
                                        <Button color="primary" value="siteither" onClick={() => this.setRSelected("siteither")} active={this.state.rSelected === "siteither"}>Either</Button>
                                    </ButtonGroup>
                                </Col>
                            </FormGroup>
                                <Button type="submit" value="submit" color="primary">Find a Table</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}
export default Restaurant