import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <h2 className="footer__logo">Taskgain</h2>
          <p className="footer__tagline">The #1 way to manage clients, projects and finance</p>
        </div>
        <div className="footer__right">
          <div className="footer__column">
            <h3 className="footer__title">Product</h3>
            <ul className="footer__list">
              <li className="footer__list-item">Story Mapping</li>
              <li className="footer__list-item">Roadmaps</li>
              <li className="footer__list-item">Prioritization</li>
              <li className="footer__list-item">Insight Management</li>
              <li className="footer__list-item">Integrations</li>
              <li className="footer__list-item">Pricing</li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__title">Resources</h3>
            <ul className="footer__list">
              <li className="footer__list-item">Product Roadmap</li>
              <li className="footer__list-item">Product Management</li>
              <li className="footer__list-item">Case Studies</li>
              <li className="footer__list-item">Release Notes</li>
              <li className="footer__list-item">Blog</li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__title">Company Details</h3>
            <ul className="footer__list">
              <li className="footer__list-item">About</li>
              <li className="footer__list-item">Terms of Service</li>
              <li className="footer__list-item">Privacy Policy</li>
              <li className="footer__list-item">Status</li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__title">Get in Touch</h3>
            <ul className="footer__list">
              <li className="footer__list-item">Sign Up Free</li>
              <li className="footer__list-item">Sign In</li>
              <li className="footer__list-item">Support</li>
              <li className="footer__list-item">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">© 2023 StoriesOnBoard. All Rights Reserved</p>
        <div className="footer__social">
          <a href="https://facebook.com" className="footer__social-link">
            <Icon icon="bi:facebook" />
          </a>
          <a href="https://x.com" className="footer__social-link">
            <Icon icon="bi:twitter-x" />
          </a>
          <a href="https://instagram.com" className="footer__social-link">
            <Icon icon="bi:instagram" />
          </a>
          <a href="https://linkedin.com" className="footer__social-link">
            <Icon icon="bi:linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
