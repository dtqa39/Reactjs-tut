import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Submit from '../components/Submit';
import Contact from '../components/Contact';

class RoutingURL extends Component {
    render() {
        return (
            <div>
                 <Route path="/contact" component={Contact}/>
                 <Route path="/submit" component={Submit} />
            </div>
        );
    }
}

export default RoutingURL;