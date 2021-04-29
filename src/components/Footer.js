import React from 'react'
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
        </div>
    );
}

export default Footer

// <link to='/sign-up'>How It Works</link>
// <link to='/'>Testamonials</link>
// <link to='/'>Careers</link>
// <link to='/'>Investors</link>
// <link to='/'>terms of Service</link>
