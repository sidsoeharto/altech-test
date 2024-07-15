import React from 'react';
import { Icon } from '@iconify/react'

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="about-us__content">
        <h2 className="about-us__title">Identify, manage, & validate product ideas</h2>
        <h6 className='about-us__subtitle'>
          Define the project scope with confidence and meet stakeholder's needs. Save time and get on the same page with a user-focused approach and visual backlog.
        </h6>
        <div className='about-us__section'>
          <img src="/images/data.png" alt="data" className="about-us__image"/>
          <div className="about-us__text">
            <h2 className='about-us__text--title'>Seamless Collaboration</h2>
            <ul>
              <li className='about-us__text--item'>
                <Icon icon="solar:check-circle-linear" className='about-us__text--item-icon' />
                Organization-wide collaboration made easy
              </li>
              <li className='about-us__text--item'>
                <Icon icon="solar:check-circle-linear" className='about-us__text--item-icon' />
                Gather internal & external stakeholders around the backlog
              </li>
              <li className='about-us__text--item'>
                <Icon icon="solar:check-circle-linear" className='about-us__text--item-icon' />
                Promote transparency, and shared understanding
              </li>
            </ul>
          </div>
        </div>
        <div className='about-us__section'>
          <div className="about-us__text">
            <h2 className='about-us__text--title'>Visualize progress with chart</h2>
            <ul className='about-us__text--list'>
              <li className='about-us__text--item'>
                <Icon icon="solar:check-circle-linear" className='about-us__text--item-icon'/>
                Implementation of new features and enhancements
              </li>
              <li className='about-us__text--item'>
                <Icon icon="solar:check-circle-linear" className='about-us__text--item-icon'/>
                Pending final assessment and quality checks
              </li>
              <li className='about-us__text--item'>
                <Icon icon="solar:check-circle-linear" className='about-us__text--item-icon'/>
                Successful integration of advanced functionalities
              </li>
            </ul>
          </div>
          <img src="/images/data.png" alt="data" className="about-us__image"/>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;