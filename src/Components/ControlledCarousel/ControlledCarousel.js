/* import { render } from "@testing-library/react"; */
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ControlledCarousel.css'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="img-style mx-auto">
                    <img
                        className="d-block img-fluid"
                        src="https://i.ibb.co/mRzPW4L/bg-4.jpg"
                        alt="Second slide"
                    />
                </div>
                <Carousel.Caption className="slider-text mx-auto">
                    <div >
                        <h2 className="fw-bold">Exceptional Care Close to You </h2>
                        <p className="mb-2">More than one million trips with no nightly rates, taxes, or fees.</p>
                        <div className="slider-btn my-4">
                            <Link className="fw-bold btn-style" to="/Exclusive">Know More</Link>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className="img-style mx-auto ">
                    <img
                        className="d-block img-fluid"
                        src="https://i.ibb.co/VxntDym/bg-2.jpg"
                        alt="Second slide"
                    />
                </div>

                <Carousel.Caption className="slider-text mx-auto">
                    <div >
                        <h2 className="fw-bold">Beyond the Normal</h2>
                        <p className="mb-2">Discover unique travel and relaxing experiences to book through TripNTour.</p>
                        <div className="slider-btn my-4">
                            <Link className="fw-bold btn-style" to="/Exclusive">Know More</Link>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className="img-style mx-auto ">
                    <img
                        className="d-block img-fluid"
                        src="https://i.ibb.co/PNKWM7n/bg-3.jpg"
                        alt="Second slide"
                    />
                </div>

                <Carousel.Caption className="slider-text mx-auto">
                    <div>
                        <h2 className="fw-bold text-dark">Beyond Travel</h2>
                        <p className="mb-2">Use TripNTour for great local experiences and leisure and travel-related merchandise.</p>
                        <div className="slider-btn my-4">
                            <Link className="fw-bold btn-style" to="/Exclusive">Know More</Link>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default ControlledCarousel;