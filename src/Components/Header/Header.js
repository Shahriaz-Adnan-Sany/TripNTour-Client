import Button from '@restart/ui/esm/Button';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import logo from '../logo/logo.jpg';

/* import useFirebase from '../Hooks/FirebaseHook'; */
import './Header.css';
const Header = () => {
    /*  const { user, logOut } = useFirebase(); */
    const { user, logOut } = useAuth();
    return (
        <div className="header py-2">
            <Container fluid>
                <Navbar collapseOnSelect expand="lg" className="row my-2 mx-auto">
                    <div className="col-sm-12 col-md-2 mx-auto heading-img">
                        <img className="img-fluid" src={logo} alt="" />
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="col-sm-12 col-md-4 d-flex justify-content-start">
                            <Link className="fw-bold btn-style me-1" to="/Home">Home</Link>
                            <Link className="fw-bold btn-style me-1" to="/Features">Features</Link>
                            <Link className="fw-bold btn-style me-1" to="/Services">Services</Link>
                            <Link className="fw-bold btn-style me-1" to="/Exclusive">Exclusive</Link>
                            <Link className="fw-bold btn-style me-1" to="/Order">Order</Link>
                        </Nav>

                        <div className="col-sm-12 col-md-6 d-flex justify-content-end">
                            <Form className="">
                                {user?.email ? (
                                    <>
                                        <div className="div d-flex align-items-center">
                                            <span className=" fw-bold text-dark me-2"> {user.displayName} </span>
                                            <Nav.Link as={Link} to="/AddService" className="fw-bold btn-style me-2 text-dark">
                                                Add Service
                                            </Nav.Link>
                                            <Nav.Link as={Link} to="/Myorders" className="fw-bold btn-style text-dark">
                                                My Orders
                                            </Nav.Link>
                                            <Button onClick={logOut} className="fw-bold btn-style text-end mx-1">Log Out</Button>
                                        </div>

                                    </>

                                ) : (
                                    <Nav.Link as={Link} to="/LogIn" className="fw-bold btn-style mx-2 text-dark text-end">
                                        Log In
                                    </Nav.Link>
                                )}
                            </Form>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div >
    );
};

export default Header;