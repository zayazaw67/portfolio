import React from 'react';
import { Col, Row } from 'reactstrap';
import './intro.css';
import ScrollAnimation from 'react-animate-on-scroll';


const Intro = (props) => {
    return (
        <div id="home" className="intro">
            <Row>
                <Col md="6">
                    <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                        <h1 className="display-3">Hi, you've reached my page.</h1>
                    </ScrollAnimation>
                    <hr className="my-2" />
                    <ScrollAnimation delay={500} animateIn='fadeIn' animateOnce={true}>
                        <p>My name is Zaya. I'm a learning web developer with a passion for electronics and technology.</p>
                        <p>Feel free to browse some of my previous work, and read more about me.</p>
                        <p>If you like my work, feel free to check out my resume.</p>
                    </ScrollAnimation>
                </Col>

                <Col md="6">
                    <ScrollAnimation delay={2000} duration={4}
                        animateIn='hinge'
                        initiallyVisible={true}
                        animateOnce={true}>
                        <img className="cartoonImage" src="https://i.imgur.com/qtsVq5w.png" width="50%" alt="Cartoon of programmer"></img>
                    </ScrollAnimation>
                </Col>
            </Row>
        </div>
    );
};

export default Intro;