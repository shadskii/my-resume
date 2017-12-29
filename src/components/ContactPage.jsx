import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';

class ContactPage extends Component {

    render() {
        return (
            <div>
                <div className='row col'>
                    <ProfilePicture />
                </div>
                <h1>Contact Me</h1>
                <div className='row col'>
                    <i class="fa fa-github fa-5x"></i>
                    <i class="fa fa-linkedin-square fa-5x" aria-hidden="true"></i>
                    <i class="fa fa-stack-overflow fa-5x" aria-hidden="true"></i>
                    <i class="fa fa-envelope fa-5x" aria-hidden="true"></i>
                </div>
            </div>
        );
    }
}
export default ContactPage;