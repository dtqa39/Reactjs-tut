import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100">
                        <div className="col-lg-7 my-auto">
                            <div className="header-content mx-auto">
                            <h1 className="mb-5">New Age Contact</h1>
                            <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                            </div>
                        </div>
                        <div className="col-lg-5 my-auto">
                            <div className="device-container">
                            <div className="device-mockup iphone6_plus portrait white">
                                <div className="device">
                                <div className="screen">
                                    {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                                    <img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/demo-screen-1.jpg" className="img-fluid" alt = "" />
                                </div>
                                <div className="button">
                                    {/* You can hook the "home button" to some JavaScript events or just remove it */}
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </header>
                    <section className="contact bg-primary" id="contact">
                        <div className="container">
                        <h2>We
                            <i className="fas fa-heart" />
                            new friends!</h2>
                        <ul className="list-inline list-social">
                            <li className="list-inline-item social-twitter">
                            <a href="/">
                                <i className="fab fa-twitter" />
                            </a>
                            </li>
                            <li className="list-inline-item social-facebook">
                            <a href="/">
                                <i className="fab fa-facebook-f" />
                            </a>
                            </li>
                            <li className="list-inline-item social-google-plus">
                            <a href="/">
                                <i className="fab fa-google-plus-g" />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Contact;