import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                Join the Adventure newsletter to recieve our best vacation deals.
                </p>
                <p className="footer-subscription-text">
                You can unsubscribe at any time.
                </p>
                <form>
                    <input type="email" name="email" placeholder="Your email" className="footer-input"/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL © 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                         to="/" 
                         target="_blank"
                         aria-label='Facebook'
                         >
                        <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                         to="/" 
                         target="_blank"
                         aria-label='Instagram'
                         >
                        <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                         to="/" 
                         target="_blank"
                         aria-label='LinkedIn'
                         >
                        <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                         to="/" 
                         target="_blank"
                         aria-label='Twitter'
                         >
                        <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer

// <link to='/sign-up'>How It Works</link>
// <link to='/'>Testamonials</link>
// <link to='/'>Careers</link>
// <link to='/'>Investors</link>
// <link to='/'>terms of Service</link>
