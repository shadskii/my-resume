import React, { Component } from 'react';
import ProfilePicture from './ProfilePicture';
import IconLink from './IconLink';

class ContactPage extends Component {



    render() {
        return (
            <div className='container-fluid'>
                <div className='row center-in-page'>
                    <ProfilePicture />
                </div>
                <h1 className='row center-in-page' >Contact Me</h1>
                <div className='row'>
                    <IconLink icon='fa-github' link='https://github.com/shadskii' css='col-lg-1 col-lg-offset-4' />
                    <IconLink icon='fa-linkedin-square' link='https://www.linkedin.com/in/jacob-k-hassel/' css='col-lg-1' />
                    <IconLink icon='fa-stack-overflow' link='https://stackoverflow.com/users/7601918/' css='col-lg-1' />
                    <IconLink icon='fa-envelope' link='mailto:jake.k.hassel@gmail.com' css='col-lg-1' />
                </div>
                <div className='row center-in-page'>
                    <div >
                        <h1 >
                            <span className='label label-primary'>RESUME</span>
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContactPage;