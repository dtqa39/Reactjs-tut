import React, { Component } from 'react';
import {
    BrowserRouter as
    Redirect
  } from "react-router-dom";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            name: "",
            email: "",
            phone: "",
            message: ""
        };
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    submitForm = (event) => {
        event.preventDefault();
        console.log("submit");
        this.setState({isRedirect: true});
    }
    render() {
        if(this.state.isRedirect === true){
            console.log(this.state.name);
            return <Redirect to="/submit" />;
        }
        console.log(this.state.isRedirect);
        console.log("This is contact");
        return(
            <section id="contact" className="mt-5">
            <div className="container">
                <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                <hr className="star-dark mb-5" />
                <div className="row">
                <div className="col-lg-8 mx-auto">
                    {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                    {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Name</label>
                        <input className="form-control" id="name" name="name" type="text" onChange = {(event) => this.isChange(event)} placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                        <p className="help-block text-danger" />
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Email Address</label>
                        <input className="form-control" id="email" name = "email" type="email" onChange = {(event) => this.isChange(event)} placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                        <p className="help-block text-danger" />
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Phone Number</label>
                        <input className="form-control" id="phone" name = "phone" type="tel" onChange = {(event) => this.isChange(event)} placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                        <p className="help-block text-danger" />
                        </div>
                        <div class="form-group">
                          <label for="">Select</label>
                          <select class="form-control" name="" id="">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </select>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Message</label>
                        <textarea className="form-control" id="message" name = "message" onChange = {(event) => this.isChange(event)} rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                        <p className="help-block text-danger" />
                        </div>
                    </div>
                    <br />
                    <div id="success" />
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton" onClick = {(event) => this.submitForm(event)}>Send</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </section>

        );
    }
}

export default Contact;