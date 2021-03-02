import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import './sidebar.css';

const SideBar = () => {
    return (
        <aside>
            <div className="sidebar">
                <div className="personal-info text-center text-white">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/cv-image.jpg'} alt="Personal" className="img-thumbnail rounded-circle mx-2 my-4 p-image" />
                    </div>
                    <div className="my-2">
                        <p className="name">Stoyan Lazarov</p>
                        <p className="title">Full Stack Developer</p>
                    </div>
                </div>
                <Navbar className="my-3">
                    <Nav className="flex-column w-100">
                        <NavItem className="my-2">
                            <Link to="/"> Home </Link>
                        </NavItem>
                        <NavItem className="my-2">
                            <Link to='/projects'> Projects </Link>
                        </NavItem>
                        <NavItem className="my-2">
                            <Link to='#'> Skills </Link>
                        </NavItem>
                        <NavItem className="my-2">
                            <Link to='#'> Contacts </Link>
                        </NavItem>
                        <NavItem className="my-2">
                            <Link to='/cv'> CV </Link>
                        </NavItem>
                    </Nav>
                </Navbar>
                <div className="social text-center mt-5">
                    <p className="text-white">Get in touch</p>
                    <div className="social-icons">
                        <a rel="noreferrer" href="https://twitter.com/Dree657" title="@dree657" target="_blank">
                            <FontAwesome
                                className="px-2"
                                name="twitter"
                                size="2x"
                            />
                        </a>
                        <a rel="noreferrer" href="https://github.com/Dreed657" title="Dreed657" target="_blank">
                            <FontAwesome
                                className="px-2"
                                name="github"
                                size="3x"
                            />
                        </a>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/stoyan-lazarov/" title="Stoyan Lazarov" target="_blank">
                            <FontAwesome
                                className="px-2"
                                name="linkedin"
                                size="2x"
                            />
                        </a>
                        <a rel="noreferrer" href="https://www.instagram.com/stoyanlazarov_657/" title="stoyanlazarov_657" target="_blank">
                            <FontAwesome
                                className="px-2"
                                name="instagram"
                                size="3x"
                            />
                        </a>
                    </div>
                </div>
                {/* <div className="info text-center">
                    <p>© Copyright ©{new Date().getFullYear()}</p>
                </div> */}
            </div>
        </aside>
    )
}

export default SideBar;