import React, { Component } from 'react';
import data from './data.json';

class FeatureDetail extends Component {
    render() {
        return(
            <div>
                {
                data.map((value, key) => {
                    if(value.id == this.props.match.params.id){
                        return (
                            <section className="cta">
                                <div className="cta-content">
                                <div className="container">
                                    <h2>{value.feature}<br />Start building.</h2>
                                    <a href="/contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
                                </div>
                                </div>
                                <div className="overlay" />
                            </section>
                        );                
                    }
                }
                )
            }
            </div>
        )
        // return (
        //         <section className="cta">
        //             <div className="cta-content">
        //             <div className="container">
        //                 <h2>Stop waiting.<br />Start building.</h2>
        //                 <a href="/contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
        //             </div>
        //             </div>
        //             <div className="overlay" />
        //         </section>
        //     );   
    }
}

export default FeatureDetail;