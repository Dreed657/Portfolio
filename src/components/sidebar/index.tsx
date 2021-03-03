import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import styles from './index.module.css';

function SideBar() {
    return (
        <aside>
            <div className={styles.sidebar}>
                <Link to="/">
                    <div className="text-center text-white">
                        <div>
                            <img src={process.env.PUBLIC_URL + '/cv-image.jpg'} alt="Personal" className={styles.image} />
                        </div>
                        <div className="my-2">
                            <p className={styles.name}>Stoyan Lazarov</p>
                            <p className={styles.title}>Full Stack Developer</p>
                        </div>
                    </div>
                </Link>
                <Navbar className="my-3">
                    <Nav className="flex-column w-100">
                        <NavItem className="my-2">
                            <Link to='/portfolio' className={styles.link}> Porfolio </Link>
                        </NavItem>
                        <NavItem className="my-2">
                            <Link to="/about" className={styles.link}> About Me </Link>
                        </NavItem>
                        <NavItem className="my-2">
                            <Link to='/contact' className={styles.link}> Contact me </Link>
                        </NavItem>
                    </Nav>
                    <Nav className="flex-column w-100">
                        <NavItem className="my-2">
                            <Link to='/cv' className={styles.link}> CV </Link>
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