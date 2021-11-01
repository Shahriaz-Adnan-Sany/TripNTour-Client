import React from 'react';
import { Link } from 'react-router-dom';
import './HomeFeature.css';
const HomeFeature = () => {
    return (
        <div className="home-feature mx-auto row p-5">
            <div className="feature-content mx-auto px-2 col-md-12">
                <h2 className="my-4 fw-bold">Introducing the new <span className="heading-color">TripNTour</span> Pass</h2>
                <h6 className="mb-4 fs-5 text-secondary">The world’s first luxury travel subscription just got even better. <br /> Still no nightly rates, taxes, or fees, and now with more flexibility, value, and trips than ever before.</h6>
                <div className="feature-btn my-2">
                    <Link className="fw-bold btn-style " to="/Features">What Are You Waiting For</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeFeature;