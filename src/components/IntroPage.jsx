import React, { Component } from 'react';
import jake from '../jake.jpg';
import ProfilePicture from './ProfilePicture';

class IntroPage extends Component {

    render() {
        return (
            <div className='container'>
                <div className='row center-in-page'>
                    <div >
                        <ProfilePicture />
                    </div>
                </div>
                <div className='row center-in-page'>
                    <div >
                        <h1 >
                            <span className='label label-primary'>Software Developer</span>
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default IntroPage;