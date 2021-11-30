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
                        <li className="d-flex mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-light">More than one million trips with no nightly rates, taxes, or fees.</span></li>
                        <li className="d-flex mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-light">Hold multiple Pass reservations at the same time.</span></li>
                        <li className="d-flex mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-light">When you can't travel, use your Pass for lifestyle merchandise and local experiences.</span></li>
                        <li className="d-flex mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-light">Flexible cancellation policy if your plans change.</span></li>
                    </div>
                    <div className="sub-box col-md-6 col-sm-12">
                        <li className="d-flex mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-light">Includes Club subscription at preferred pricing with additional booking access and benefits.</span></li>
                        <li className="d-flex mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-light">First-class personalized Inspirato service on every trip.</span></li>
                        <li className="d-flex mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-light">Sharing plans available to let your family and friends take trips of their own.</span></li>
                        <li className="d-flex mb-2"><i className="fas fa-hand-point-right"></i><span className="text-secondary fs-5 fw-light">No long-term commitment; cancel your subscription at any time.</span></li>
                    </div>
                </div>
                <hr />
                <div className="subcribe-button my-2 mx-auto">
                    <Link className="btn btn-danger rounded-0 mx-2" to="/LogIn">Subscribe To TripNTour</Link>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;