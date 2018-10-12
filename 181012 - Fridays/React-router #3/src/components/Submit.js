import React, { Component } from 'react';

class Submit extends Component {
    render() {
        console.log("render submit");
        return (
            <div className="portfolio-modal mfp-hide m-5" id="portfolio-modal-1">
            <div className="portfolio-modal-dialog bg-white">
                <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="/">
                <i className="fa fa-3x fa-times" />
                </a>
                <div className="container text-center">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                    <h2 className="text-secondary text-uppercase mb-0">Sucessful Submit</h2>
                    <hr className="star-dark mb-5" />
                    <img className="img-fluid mb-5" src="img/portfolio/cabin.png" alt="" />
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="/">
                        <i className="fa fa-close" />
                        Back</a>
                    </div>
                </div>
                </div>
            </div>
            </div>

        );
    }
}

export default Submit;