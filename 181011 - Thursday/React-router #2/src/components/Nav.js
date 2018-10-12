import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="/">New Age</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li>
                            <Link to="/" className="nav-link js-scroll-trigger">Home</Link>
                            </li>
                            <li>
                            <Link to="/download" className="nav-link js-scroll-trigger">Download</Link>
                            </li>
                            <li>
                            <Link to="/feature" className="nav-link js-scroll-trigger">Feature</Link>
                            </li>
                            <li>
                            <Link to="/contact" className="nav-link js-scroll-trigger">Contact</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;