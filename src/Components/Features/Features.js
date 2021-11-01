import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css';
const Features = () => {
    return (
        <div className="feature-container py-4">
            <h2>Frequently Asked Questions</h2>
            <div className="row p-4 g-4">
                <div className="col-sm-6">
                    <div className="card shadow rounded-3">
                        <div className="card-body">
                            <h5 className="card-title">What is TripNTour?What is TripNTour?</h5>
                            <p className="card-text">TripNTour is a luxury travel and lifestyle subscription that gives you access to over one million trips for $2,500 per month, with no nightly rates, taxes, or fees. Options include spacious Inspirato vacation homes, luxury hotels and resorts from brands you know and love, and custom travel experiences. Trips range from 2 to 14 days, can be booked up to 365 days in advance, and are updated daily.</p>
                            <div className="subcribe-button my-2 mx-auto">
                                <Link className="fw-bold btn-style mx-2" to="/LogIn">Subscribe To TripNTour</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card shadow rounded-3">
                        <div className="card-body">
                            <h5 className="card-title">What are the benefits of the Inspirato Club subscription that comes with TripNTour?</h5>
                            <p className="card-text">The $2,500 monthly price for TripNTour consists of $2,200 for Pass and preferred pricing of $300 (versus list pricing of $600/month) for all the benefits of an Inspirato Club subscription. These include flexibility to book outside the Pass Trip List, dedicated service on every trip, member events, Bespoke travel, and more.</p>
                            <div className="subcribe-button my-2 mx-auto">
                                <Link className="fw-bold btn-style mx-2" to="/LogIn">Subscribe To TripNTour</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card shadow rounded-3">
                        <div className="card-body">
                            <h5 className="card-title">Do I need to make any additional payments when I book trips with TripNTour?</h5>
                            <p className="card-text">Your TripNTour covers the nightly rates, taxes, and fees for your Pass trips. You are responsible for your travel costs (e.g., airline tickets, rental cars, etc.) and any charges you choose to incur during your stay (e.g., parking, Wi-Fi access, food and beverage, activities, etc.).</p>
                            <div className="subcribe-button my-2 mx-auto">
                                <Link className="fw-bold btn-style mx-2" to="/LogIn">Subscribe To TripNTour</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card shadow rounded-3">
                        <div className="card-body">
                            <h5 className="card-title">Can I hold multiple reservations at the same time with TripNTour?</h5>
                            <p className="card-text">Yes. TripNTour gives you the flexibility to hold multiple reservations at the same time. Simply place your Pass in use for the number of Pass Days required to reserve your desired trip. Once the Pass Days are complete, you can reserve your next trip, independent of your travel dates.</p>
                            <div className="subcribe-button my-2 mx-auto">
                                <Link className="fw-bold btn-style mx-2" to="/LogIn">Subscribe To TripNTour</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card shadow rounded-3">
                        <div className="card-body">
                            <h5 className="card-title">What service is included with TripNTour?</h5>
                            <p className="card-text">Every TripNTour trip includes first-class personalized service, with pre-trip planning, on-site concierge, and daily housekeeping. Your dedicated Care team will help you choose your trips, connect you to local experts, let you know about new properties and destinations, and take advantage of the full Inspirato experience.</p>
                            <div className="subcribe-button my-2 mx-auto">
                                <Link className="fw-bold btn-style mx-2" to="/LogIn">Subscribe To TripNTour</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card shadow rounded-3">
                        <div className="card-body">
                            <h5 className="card-title">Can my family, friends, and colleagues take trips of their own with my TripNTour?</h5>
                            <p className="card-text">Yes, if you add one of our sharing plans. Choose the Family Sharing plan for $300/month or the Premium Sharing plan for $500/month and experience the joy of inviting your family, friends, and colleagues to enjoy trips of their own with your Pass.</p>
                            <div className="subcribe-button my-2 mx-auto">
                                <Link className="fw-bold btn-style mx-2" to="/LogIn">Subscribe To TripNTour</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card shadow rounded-3">
                        <div className="card-body">
                            <h5 className="card-title">How do I use my Pass during times when I am not able to travel?</h5>
                            <p className="card-text">We understand that life sometimes gets busy. During times you cannot travel, you can use your TripNTour to order premium lifestyle merchandise and local experiences through our Beyond Travel program.</p>
                            <div className="subcribe-button my-2 mx-auto">
                                <Link className="fw-bold btn-style mx-2" to="/LogIn">Subscribe To TripNTour</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card shadow rounded-3">
                        <div className="card-body">
                            <h5 className="card-title">What if I want to cancel my TripNTour subscription?</h5>
                            <p className="card-text">TripNTour requires no long-term commitment. You may cancel your subscription at any time. Please note your subscription must be active to both reserve and travel with your Pass.</p>
                            <div className="subcribe-button my-2 mx-auto">
                                <Link className="fw-bold btn-style mx-2" to="/LogIn">Subscribe To TripNTour</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;