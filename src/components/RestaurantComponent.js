import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Container, Col } from 'reactstrap';

class Restaurant extends Component {
    constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        brunchMenu: true,
        allDayMenu: false,
        hhMenu: false,
        dropdownOpen: false,
        }
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    }
    

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row className="main-container">
                        <Col className="class-col">
                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="my-3" size="lg">
                                <DropdownToggle caret color="success" >
                                    Menus
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Brunch</DropdownItem>
                                    <DropdownItem>All Day</DropdownItem>
                                    <DropdownItem>Happy Hour</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </Col>
                        <Col className="class-col">
                            <Button className="btn-lg my-3" color="primary">Reservations</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
export default Restaurant