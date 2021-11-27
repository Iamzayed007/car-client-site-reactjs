import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


import './Header.css'

const Header = () => {
    const {user,logOut} = useAuth()
    return (
        <div>
            {/* const {user,logOut} = useAuth() */}

            <Navbar sticky="top" collapseOnSelect expand="lg" bg="myRed"  >
                <Container>
                    <Navbar.Brand as={HashLink} to="/" className="fs-1"> <span className="text-black" >Car Gallery</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link as={HashLink} to="/"><span className="text-white fw-bold fs-5" >Home</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/cars"><span className="text-white fw-bold fs-5" >Cars</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/#latest"><span className="text-white fw-bold fs-5" >Latest car</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/dashboard"><span className="text-white fw-bold fs-5" >Dashboard</span></Nav.Link>

                        </Nav>


                        {user.email &&
                            <Nav><button onClick={logOut} className="btn btn-outline-danger fw-bold text-white">Logout </button></Nav>
                        }
                       {!user.email &&
                            <Nav>
                            <Nav.Link as={HashLink} to="/login" className="btn btn-outline-dark fw-bold text-white" >Login</Nav.Link>
                        </Nav>
                       }


                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;