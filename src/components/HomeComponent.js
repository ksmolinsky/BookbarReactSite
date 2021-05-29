import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';
import MainCarousel from './MainCarouselComponent';
import NewReleaseCarousel from './NewReleaseCarouselComponent';



class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { 
	};
	};
	render() {
		return (
			<React.Fragment>
			<div className="container">
				<div className="row row-content">
					<div className="col">
					<MainCarousel />
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row row-content">
					<div className="col-6">
						<Card className="h-100">
							<CardBody>
								<CardHeader className="bg-success text-white text-center">
									New Releases
								</CardHeader>
								<CardText className="text-center">
								<NewReleaseCarousel />
								</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="col-6">
						<Card className="h-100">
							<CardBody>
								<CardHeader className="bg-success text-white text-center">Hours of Operation</CardHeader>
								<CardText className="text-center py-1">
									<p className="py-5"><strong>Restaurant: </strong><br/>Monday-Friday<br/>8AM-9PM<br/><br/> Saturday-Sunday <br/> 9:30AM-10PM </p>
									<p className="py-5"><strong>Bookstore:</strong><br/>Everyday: <br/>  8AM-9PM</p>
								</CardText>
							</CardBody>
						</Card>
					</div>
				</div>
			</div>
			</React.Fragment>
		);
	};
};

export default Home;