import React, { Component } from 'react';
import jake from '../jake.jpg';
import ProfilePicture from './ProfilePicture';

class IntroPage extends Component {

    render() {
        return (
            <div>
                <div className='row col'>
                    <ProfilePicture />
                </div>

                <div className='row col'>
                    <h1 >
                        <span className='label label-primary'>Software Developer</span>
                    </h1>
                </div>
            </div>
        );
    }
}

export default IntroPage;