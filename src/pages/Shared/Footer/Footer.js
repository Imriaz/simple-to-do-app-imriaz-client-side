import Button from '@restart/ui/esm/Button';
import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid p-5 bg-dark text-white">
            <div className="row">
                <div className="col-lg-3 col-sm-12">
                    <h5><img src="https://i.ibb.co/bPfZg7J/Logo.jpg" width="100"
                        height="100"
                        className="d-inline-block align-top " alt='' /><br />To Do List by Imriaz</h5>
                    <p>Your Trusted To Do List Partner</p>
                    <p> about@todolistbyimriaz.com</p>
                    <p> +8801521227844</p>
                    <p> Mirpur-10, Dhaka</p>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <h5>Our Upcoming Offer & Feature</h5>
                    <br />
                    <p>You get a Reminder SMS on your phone</p>
                    <p>Subscription Charge will be reduce</p>
                    <p>More payment method will be available</p>
                    <p>Exciting Black Friday Discount up to 60%</p>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <h5>Subscribe to our Newsletter</h5>
                    <p>Subscribe our newsletter for notify update of our future update of our apps.</p>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <br />
                    <br />
                    <Button variant="outline-info">Subscribe</Button>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <h5>Our Instagram</h5>
                    <h5>Our Facebook</h5>
                    <p>To Do List by Imriaz is a renowned using app for listing daily personal work to maintain timely. People get more friendly feature on this app.</p>
                </div>
            </div>
            <div>
                <small>Powered by @ Imriaz 2021</small>
            </div>
        </div>
    );
};

export default Footer;