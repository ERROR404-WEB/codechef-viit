import React from 'react';
import Team from './Team';
import Seminar from './Activities';
import Contest from './Contest';
import codeingboy from '../assets/coding_boy.svg';
import { Zoom } from 'react-awesome-reveal';
import 'animate.css';
import './Home.css';

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="homecontainer">
          <div className="textheader">
            <Zoom>
              <h1 className="animate__animated animate__fadeInDown animate__fast animate__delay-1s">
                Welcome to Codechef VIIT Chapter
              </h1>
            </Zoom>
          </div>
          <div className="ccimage animate__animated animate__fadeInDown">
            <Zoom>
              <img src={codeingboy} alt="coding boy" />
            </Zoom>
          </div>
        </div>
        <div className="section-overlay"></div>
      </section>
      <section id="contest">
        <Contest />
      </section>
      <section id="seminar">
        <Seminar />
      </section>
      <section id="team">
        <Team />
      </section>
      <footer className="footer">
        <p className="footer__title">Vignan'IIT CodeChef</p>
        <p>© 2023 Copyright all rights reserved</p>
      </footer>
    </>
  );
};

export default Home;
