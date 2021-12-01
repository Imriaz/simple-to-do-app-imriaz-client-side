import React from 'react';
import emailjs from 'emailjs-com';
import Navigation from '../Shared/Navigation/Navigation';
import './ContactUs.css'

const ContactUs = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w2nhg64', 'ContactWithImriaz', e.target, 'user_kb80kTBPl5yCGj7ZzRSPP')
            .then((result) => {
                alert("Your Message has been successfully sent. To Do List App will contact you Soon.")
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <>
            <Navigation />
            <div className='avoid-margin'>
                <h1>Your Trusted To Do List App: <span className='company-title'>To Do List by Imriaz</span></h1>
                <p>To Do List by Imriaz is a renowned using app for listing daily personal work to maintain timely. People get more friendly feature on this app.</p>

                <h2 style={{ marginTop: '60px' }}>Contact Us</h2>
                <div>

                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto mb-3">
                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                    </form>
                </div>

                <br />
                <br />
                <h2>Contact Address:</h2>
                <h3>Mirpur-10, Dhaka, Bangladesh</h3>
                <h3>Mobile: 01521227844</h3>
            </div>
        </>
    );
};

export default ContactUs;