import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

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
                            {/* <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/download">Download</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/feature">Feature</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/contact">Contact</a>
                            </li> */}
                            <li>
                            <NavLink to="/" className="nav-link js-scroll-trigger">Home</NavLink>
                            </li>
                            <li>
                            <NavLink to="/download" className="nav-link js-scroll-trigger">Download</NavLink>
                            </li>
                            <li>
                            <NavLink to="/feature" className="nav-link js-scroll-trigger">Feature</NavLink>
                            </li>
                            <li>
                            <NavLink to="/contact" className="nav-link js-scroll-trigger">Contact</NavLink>
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