import React from 'react';
import { Icon } from '@iconify/react';

const ContactUs = () => {
  return (
    <section className="contact-us" id="contact">
      <div className="contact-us__content">
        <div className="contact-us__left">
          <h2 className="contact-us__title">Contact us</h2>
          <p className="contact-us__subtitle">Explore StoriesOnBoard with a guided tour and discuss how it would fit into your processes</p>
          <div className="contact-us__social">
            <a href="https://facebook.com" className="contact-us__social-link">
              <Icon icon="bi:facebook" />
            </a>
            <a href="https://x.com" className="contact-us__social-link">
              <Icon icon="bi:twitter-x" />
            </a>
            <a href="https://instagram.com" className="contact-us__social-link">
              <Icon icon="bi:instagram" />
            </a>
            <a href="https://linkedin.com" className="contact-us__social-link">
              <Icon icon="bi:linkedin" />
            </a>
          </div>
          <div className="contact-us__info">
            <div className="contact-us__info-item">
              <strong>Address:</strong> 1881 Devmads UK, German, Laomi 5665, USA
            </div>
            <div className="contact-us__info-item">
              <strong>Visit Us:</strong> Monday - Friday, 8AM to 5PM
            </div>
          </div>
        </div>
        <div className="contact-us__right">
          <form className="contact-us__form">
            <div className="contact-us__form-group">
              <label htmlFor="name" className="contact-us__form-label">Full Name*</label>
              <input type="text" id="name" className="contact-us__form-input" placeholder="Your name" required />
            </div>
            <div className="contact-us__form-group">
              <label htmlFor="email" className="contact-us__form-label">Email*</label>
              <input type="email" id="email" className="contact-us__form-input" placeholder="you@email.com" required />
            </div>
            <div className="contact-us__form-group">
              <label htmlFor="company" className="contact-us__form-label">Company Name*</label>
              <input type="text" id="company" className="contact-us__form-input" placeholder="Your company name" required />
            </div>
            <div className="contact-us__form-group">
              <label htmlFor="size" className="contact-us__form-label">Company Size*</label>
              <select id="size" className="contact-us__form-select" required>
                <option>Less than 100 employees</option>
                <option>100-500 employees</option>
                <option>500-1000 employees</option>
                <option>More than 1000 employees</option>
              </select>
            </div>
            <div className="contact-us__form-policy-group">
              <input type="checkbox" id="policy" className="contact-us__form-checkbox" required />
              <label htmlFor="policy" className="contact-us__form-label-checkbox">I agree to Privacy Policy and Terms of Use</label>
            </div>
            <button type="submit" className="contact-us__form-btn">Get Started</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
