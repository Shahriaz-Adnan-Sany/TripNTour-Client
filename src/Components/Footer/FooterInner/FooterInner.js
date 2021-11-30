import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logo/logo.jpg';

import './FooterInner.css';
const FooterInner = () => {
    return (
        <div className="footer-inner mx-auto row g-2 p-4">
            <div className="col-md-4 col-sm-12">
                <div className="fotter-img mx-auto">
                    <img className="img-fluid" src={logo} alt="" />
                </div>
                <div className="social-icons mx-auto">
                    <a className="mx-2" href="#"><i className="fab fa-facebook icons"></i></a>
                    <a className="mx-2" href="#"><i className="fab fa-twitter-square"></i></a>
                    <a className="mx-2" href="#"><i className="fab fa-instagram-square"></i></a>
                    <a className="mx-2" href="#"><i className="fas fa-basketball-ball"></i></a>
                    <a className="mx-2" href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
            <div className="text-light my-2 col-md-4 col-sm-12 d-flex align-items-center">
                <div className="contact-ifo mx-auto">
                    <h4>Contact Us</h4>
                    <div className="contact phone">
                        <span className=""><i className="fas fa-phone-square"></i></span>
                        <span className="m-2">+880 017 ** *** ***</span>
                    </div>
                    <div className="contact email">
                        <span className=""><i className="fas fa-envelope-square"></i></span>
                        <span className="m-2">tripNtour@gmail.com</span>
                    </div>
                    <div className="contact address">
                        <span className=""><i className="fas fa-map-marker-alt"></i></span>
                        <span className="m-2">Chittagong, bangladesh</span>
                    </div>
                </div>

            </div>
            <div className="col-md-4 col-sm-12 mx-auto d-flex align-items-center">
                <Nav className="mx-auto">
                    <Link className="footer-btn" to="/Home">Home</Link>
                    <Link className="footer-btn" to="/Features">Features</Link>
                    <Link className="footer-btn" to="/Services">Services</Link>
                    <Link className="footer-btn" to="/About">About</Link>
                    <Link className="footer-btn" to="/Exclusive">Exclusive</Link>
                </Nav>
            </div>
        </div >
    );
};

export default FooterInner;