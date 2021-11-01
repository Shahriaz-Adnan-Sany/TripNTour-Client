import React from 'react';
import { Link } from 'react-router-dom';
import './Exclusive.css';
const Exclusive = () => {
    return (
        <div className="exclusive py-4">
            <div className="w-75 mx-auto">
                <div className="exclusive-info mx-auto">
                    <h2 className="fw-light fs-2">Where can you go?</h2>
                    <p>Inspirato Pass offers more than a million luxury vacation options at an amazing value with great flexibility. Plan ahead or be spontaneous. Commit to vacationing more and be happier.</p>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card shadow">
                            <img src="https://i.ibb.co/XZCdz97/card1.jpg" alt="card1" className="card-img-top img-fluid" />
                            <div className="card-body">
                                <h5 className="card-title mb-4">Homes and Hotels</h5>
                                <div className="my-2 mx-auto">
                                    <Link className="fw-bold exclusive-button" to="/LogIn">See Tour Plans</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow">
                            <img src="https://i.ibb.co/SBB3sZG/card2.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title mb-4">Experiences</h5>
                                <div className="my-2 mx-auto">
                                    <Link className="fw-bold exclusive-button" to="/Services">See Tour Plans</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow">
                            <img src="https://i.ibb.co/GP2GKdq/card3.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title mb-4">Beyond Travel</h5>
                                <div className="my-2 mx-auto">
                                    <Link className="fw-bold exclusive-button" to="/Services">See Tour Plans</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow">
                            <img src="https://i.ibb.co/txYPzHr/card4.jpg" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title mb-4">Cruise</h5>
                                <div className="my-2 mx-auto">
                                    <Link className="fw-bold exclusive-button" to="/Services">See Tour Plans</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exclusive;