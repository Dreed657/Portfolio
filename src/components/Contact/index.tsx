import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './index.module.css';
import MapContainer from '../Map';

function Contact() {
    return (
        <div className={styles.container}>
            <div className="row h-100">
                <div className="col-lg-4 p-0">
                    <div className={styles.links}>
                        <h1 className="title">Get in touch</h1>
                        <p>If you wanna get in touch, talk to me about a project collaboration or just say hi, just follow up any of the links below.</p>
                        <div className="socials ml-4">
                            <a className={styles.anchers} rel="noreferrer" href="https://github.com/Dreed657" title="Github" target="_blank">
                                <div className="row justify-content-md-start">
                                    <div className="col-auto">
                                        <FontAwesome
                                            className="px-2"
                                            name="github"
                                            size="2x"
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <p className="m-0">Github</p>
                                        <p>Follow me on github</p>
                                    </div>
                                </div>
                            </a>
                            <a className={styles.anchers} rel="noreferrer" href="https://twitter.com/Dree657" title="Twitter" target="_blank">
                                <div className="row justify-content-md-start">
                                    <div className="col-auto">
                                        <FontAwesome
                                            className="px-2"
                                            name="twitter"
                                            size="2x"
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <p className="m-0">Twitter</p>
                                        <p>@ me on twitter</p>
                                    </div>
                                </div>
                            </a>
                            <a className={styles.anchers} rel="noreferrer" href="https://www.linkedin.com/in/stoyan-lazarov/" title="LinkedIn" target="_blank">
                                <div className="row justify-content-md-start">
                                    <div className="col-auto">
                                        <FontAwesome
                                            className="px-2"
                                            name="linkedin"
                                            size="2x"
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <p className="m-0">Linkedin</p>
                                        <p>Connect with me on linkedin</p>
                                    </div>
                                </div>
                            </a>
                            <a className={styles.anchers} rel="noreferrer" href="https://www.instagram.com/stoyanlazarov_657/" title="Instagram" target="_blank">
                                <div className="row justify-content-md-start">
                                    <div className="col-auto">
                                        <FontAwesome
                                            className="px-2"
                                            name="instagram"
                                            size="2x"
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <p className="m-0">Instagram</p>
                                        <p>Follow me on instagram</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col p-0">
                    <div className="map h-100 bg-danger">
                        {/* <MapContainer /> */}
                        <p className="text-center">Map placeholder</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;