import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import IconLink from './IconLink';

class ContactPage extends Component {



    render() {
        return (
            <div className='container '>
                <div className='row col'>
                    <ProfilePicture />
                </div>
                <h1>Contact Me</h1>
                <div className='row'>
                    <IconLink icon='fa-github' link='https://github.com/shadskii' />
                    <IconLink icon='fa-linkedin-square' link='https://www.linkedin.com/in/jacob-k-hassel/' />
                    <IconLink icon='fa-stack-overflow' link='https://stackoverflow.com/users/7601918/' />
                    <IconLink icon='fa-envelope' link='mailto:jake.k.hassel@gmail.com' />
                </div>
            </div>
        );
    }
}
export default ContactPage;