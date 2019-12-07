import React from 'react';
import { Col, Row, } from 'reactstrap';
import './intro.css';
import ScrollAnimation from 'react-animate-on-scroll';
import {
    FaGithub, FaLinkedin, FaFileAlt,
} from 'react-icons/fa';

class Intro extends React.Component {

    resumeRedirect = () => {
        window.open('https://docs.google.com/document/d/1ZbmpnjxuOtTjLDIjIAWel7grny02TY848Bf948hoE7c/edit?usp=sharing');
    };
    gitHubRedirect = () => {
        window.open('https://github.com/zayazaw67');
    };
    linkedInRedirect = () => {
        window.open('https://www.linkedin.com/in/zaya-zaw-2b4462198/');
    };

    render() {
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
                        </ScrollAnimation>
                        <ScrollAnimation delay={750} animateIn='fadeIn' animateOnce={true}>
                            <p>Feel free to browse some of my previous work, and read more about me.</p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={1000} animateIn='fadeIn' animateOnce={true}>
                            <p>If you like my work, feel free to check out my resume.</p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={1500} animateIn='fadeIn' animateOnce={true}>
                            <hr className="my-3" />
                            <h2>
                                <FaGithub className="icon" onClick={this.gitHubRedirect} />
                                <FaLinkedin className="icon" onClick={this.linkedInRedirect} />
                                <FaFileAlt className="icon" onClick={this.resumeRedirect} />
                            </h2>
                        </ScrollAnimation>
                    </Col>

                    <Col md="6">
                        <ScrollAnimation delay={3000} duration={4}
                            animateIn='hinge'
                            initiallyVisible={true}
                            animateOnce={true}>
                            <img className="cartoonImage" src="https://i.imgur.com/qtsVq5w.png" width="50%" alt="Cartoon of programmer"></img>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </div>
        );
    }
};

export default Intro;