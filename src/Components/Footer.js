import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

const Footer = () => {
    return (
        <div className='body-container'>
        <div className='footer'>
            <div className='container'>
                <div className='row justify-content-evenly pt-4'>
                    <div className=' col-box col-lg-3 col-md-3 '>
                        <h6>About Us</h6>
                        <p>Home Services is a technology platform offering a variety of home services.</p>
                    </div>
                    <div className='col-box col-lg-3 col-md-3 '>
                        <h6>Services</h6>
                        <div className='col-service-list'>
                            <ul className='serviceList'>
                                <li><p>Carpenters</p></li>
                                <li><p>Plumbers</p></li>
                                <li><p>Painters</p></li>
                                <li><p>Electricians</p></li>
                                <li><p>Ac Repairs</p></li>
                                <li><p>Appliances Repairs</p></li>
                            </ul>
                            <ul className='serviceList'>
                                <li><p>Cleaning</p></li>
                                <li><p>Deep Clean</p></li>
                                <li><p>Kitchen Deep Clean</p></li>
                                <li><p>Pest Control</p></li>
                                <li><p>Bathroom Cleaning</p></li>
                                <li><p>Home Repairs</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-box col-lg-3 col-md-3 '>
                        <h6>Address</h6>
                        <div className='col-contact'>
                            <p>A108 Adam Street,
                                <br />
                                New York, NY 535022,
                                <br />
                                United States
                            </p>
                        </div>
                    </div>
                    <div className='col-box col-lg-3 col-md-3'>
                        <h6>Contact Us</h6>
                        <div className='col-contact'>
                            <p>
                                <strong>Email : </strong>homeservices@gmail.com
                                <br />
                                <strong>Phone : </strong>+1 5589 55488 5555</p>
                            <p></p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className='row pt-4 pb-3'>
                        <div className='col-12 col-copyright'>
                            <p>&copy; 2023 <strong>Home Services</strong>, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Footer;
