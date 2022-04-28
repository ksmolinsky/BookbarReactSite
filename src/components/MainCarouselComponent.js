import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselCaption, CarouselIndicators } from 'reactstrap';
import { MainCarouselItems } from "../shared/MainCarouselItems"


class MainCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0};
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === MainCarouselItems.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? MainCarouselItems.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;

		const slides = MainCarouselItems.map((item) => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}
                    tag="div"
				>
					<img src={item.src} alt={item.altText} className="d-block w-100 carouselImage" />
					<CarouselCaption captionText={item.caption} captionHeader={item.header} className="carouselCaption" />
				</CarouselItem>
			);
		});

		return (
			<div className="container">
                <div className="row row-content">
                    <div className="col">
                        <Carousel
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}
                            fade
                        >
                            <CarouselIndicators items={MainCarouselItems} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {slides}
                            <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
                            <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
                        </Carousel>
                    </div>
                </div>
			</div>
		);
	}
}



export default MainCarousel;