import React from 'react';
import { Media, Container, Row, Col } from 'reactstrap';
import Pic from '../../images/pic.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

import './bio.css';


const Bio = () => {
  return (
    <div className="bio">
      <Container>
        <Row>
          <Col md='3'>
            <div>
              <ScrollAnimation animateIn='wobble'
                initiallyVisible={true}>
                <Media className="picture" object src={Pic} alt="Profile picture" />
              </ScrollAnimation>
            </div>
          </Col>
          <Col md='9'>
            <div className="details">
              <ScrollAnimation delay={1000} animateIn='bounce' initiallyVisible={true} animateOnce={true}>
                <Row><strong>Full-Stack Web Developer, Competitive Gamer, Telephile</strong></Row>
                <Row className="about">
                  Before diving into web development, I had an interest in how things work. This stemmed from video games.
                  I always wanted to figure out why something happens when you did something, and now I try to think in code for every game I play.
                  Technology has always been in my life and is extremely important to me. When it comes to tech and electronics, I'm highly
                  versatile, well-read, and motivated to incorporating new things into my life.
                  <p>I started just like everyone else, knowing little to nothing.
                  I didn't like the idea of being bad at something I enjoyed, and so I seek to continuously improve myself every day, whether it is 
                  through code, improving my communication ability, or even just getting better at video games.</p>
                </Row>
              </ScrollAnimation>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
};

export default Bio;