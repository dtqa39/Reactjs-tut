import React, { Component } from 'react';
import FeatureItem from './FeatureItem';
import data from './data.json';


class Feature extends Component {
    
    render() {
        console.log(data);
        return (
            <div>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100">
                        <div className="col-lg-7 my-auto">
                            <div className="header-content mx-auto">
                            <h1 className="mb-5">New Age feature</h1>
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
                <section className="features" id="features">
                    <div className="container">
                        <div className="section-heading text-center">
                        <h2>Unlimited Features, Unlimited Fun</h2>
                        <p className="text-muted">Check out what you can do with this app theme!</p>
                        <hr />
                        </div>
                        <div className="row">
                        <div className="col-lg-4 my-auto">
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
                        <div className="col-lg-8 my-auto">
                            <div className="container-fluid">
                            <div className="row">
                                {/* <FeatureItem icon = {data[1].icon} feature = {data[1].feature} content={data[1].content}></FeatureItem> */}
                                {
                                    data.map((value, key) => (
                                        <FeatureItem icon = {value.icon} id ={value.id} feature = {value.feature} content={value.content}></FeatureItem>
                                    ))
                                }
                                
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
            </div>
        );
    }
}

export default Feature;