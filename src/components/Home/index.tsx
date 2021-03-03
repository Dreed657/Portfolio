import React from 'react';

import Particles from 'react-particles-js';
import { Button } from 'reactstrap';

import styles from './index.module.css';

function Home() {
    return (
        <div className="home-page">
            <div className={styles.container}>
                <p className={styles.textLine}>Hello, I'm <span className={styles.focuesText}>Stoyan</span>.</p>
                <p className={styles.textLine}>I'm a full-stack web developer.</p>
                <Button outline className={styles.button} color="info"> View My word </Button>
            </div>
            <Particles className="h-100" params={{
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 800,
                        }
                    },
                    shape: {
                        type: "circle",
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    line_linked: {
                      enable: true,
                      distance: 150,
                      color: "#ffffff",
                      opacity: 0.4,
                      width: 1
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse"
                        }
                    }
                }
            }}/>
        </div>
    )
}

export default Home;