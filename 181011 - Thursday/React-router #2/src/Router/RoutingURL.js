import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Download from '../components/Download';
import Feature from '../components/Feature';
import Contact from '../components/Contact';
import Header from '../components/Header';
import FeatureDetail from '../components/FeatureDetail';


class RoutingURL extends Component {
    render() {
        return (
            
                <div>
                <Route exact path="/" component={Header} />
                <Route path="/download" component={Download} />
                <Route path="/feature" component={Feature} />
                <Route path="/feature-detail/:slug.:id" component={FeatureDetail} />
                <Route path="/contact" component={Contact} />
                </div>
            
        );
    }
}

export default RoutingURL;