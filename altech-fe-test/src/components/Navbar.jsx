import React, { useState } from 'react';
import { Icon } from '@iconify/react';

import LoginPopup from './LoginPopup';

const Logo = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="4.5" cy="4.5" r="4.5" fill="#007bff"/>
		<circle cx="19.5" cy="4.5" r="4.5" fill="#007bff"/>
		<circle cx="12" cy="12" r="4.5" fill="#007bff"/>
		<circle cx="4.5" cy="19.5" r="4.5" fill="#007bff"/>
		<circle cx="19.5" cy="19.5" r="4.5" fill="#007bff"/>
	</svg>
)

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

	function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
		<>
			<nav className="navbar">
				<div className="navbar__content">
					<div className="navbar__logo">
						<Logo />
						<span>Taskgain</span>
					</div>
					<button className="navbar__toggle" onClick={toggleMenu}>
						{
							isMenuOpen 
								? <Icon icon="heroicons-solid:x" className='navbar__toggle-icon' />
								: <Icon icon="heroicons-solid:menu" className='navbar__toggle-icon' />
						}
          </button>
          <ul className={`navbar__links ${isMenuOpen ? 'navbar__links--active' : ''}`}>
            <li className="navbar__link"><a href="#about">About</a></li>
            <li className="navbar__link"><a href="#pricing">Pricing</a></li>
            <li className="navbar__link"><a href="#contact">Contact</a></li>
            <li className="navbar__link--mobile">
              <button className="navbar__get-started-btn" onClick={openModal}>Login</button>
            </li>
          </ul>
          <div className="navbar__actions">
            <button className="navbar__get-started-btn" onClick={openModal}>Login</button>
          </div>
				</div>
			</nav>
			<LoginPopup isOpen={isOpen} closeModal={closeModal} />
		</>
  );
};

export default Navbar;