import React from "react";
import "./About.css";
import Bill from "../../assets/vendet.jpg";
// import Chastity from '../../assets/Chastity.jpg';

import { CgBoy } from "react-icons/cg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={Bill} alt="bill" />
        </div>
        </div>


        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
            <CgBoy className="about__icon" />
              <h5>Nothin to see here</h5>
              <small> Just a little smaller</small>
              
            </article>

            <article className="about__card">
            <CgBoy className="about__icon" />
              <h5>Nothing to see here</h5>
              <small> Just a little smaller</small>
              
            </article>

            {/* <article className='about__card'>
            <img src={Chastity} alt='photo of Chastity' />
            <CgGirl className="about__icon" />
             <h5>My oldest Daughter</h5>
              <small> 21 Years Old</small>
            </article> */}
          </div>
          <p>Hello my name is Bill. I am not doing so well as it is 3 am in the morning and I am tired
          This is all filler to create an illusion of what I may have here in this space someday.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
