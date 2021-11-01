import React from 'react';
import { Link } from 'react-router-dom';
import './Subscribe.css'
const Subscribe = () => {
    return (
        <div className="py-4 my-4">
            <div className="subscribe-info w-75 mx-auto p-4 shadow-lg">
                <div className="subscribe-heading">
                    <h2>Subscribe to TripNTour</h2>
                    <h5>Features and Pricing</h5>
                    <hr />
                </div>
                <div className="row mx-auto px-4">
                    <div className="sub-box col-md-6 col-sm-12">
                        <li className="d-flex align-items-center mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-bold">More than one million trips with no nightly rates, taxes, or fees.</span></li>
                        <li className="d-flex align-items-center mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-bold">Hold multiple Pass reservations at the same time.</span></li>
                        <li className="d-flex align-items-center mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-bold">When you can't travel, use your Pass for lifestyle merchandise and local experiences.</span></li>
                        <li className="d-flex align-items-center mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-bold">Flexible cancellation policy if your plans change.</span></li>
                    </div>
                    <div className="sub-box col-md-6 col-sm-12">
                        <li className="d-flex align-items-center mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-bold">Includes Club subscription at preferred pricing with additional booking access and benefits.</span></li>
                        <li className="d-flex align-items-center mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-bold">First-class personalized Inspirato service on every trip.</span></li>
                        <li className="d-flex align-items-center mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-bold">Sharing plans available to let your family and friends take trips of their own.</span></li>
                        <li className="d-flex align-items-center mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-bold">No long-term commitment; cancel your subscription at any time.</span></li>
                    </div>
                </div>
                <hr />
                <div className="subcribe-button my-2 mx-auto">
                    <Link className="fw-bold btn-style mx-2" to="/LogIn">Subscribe To TripNTour</Link>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;