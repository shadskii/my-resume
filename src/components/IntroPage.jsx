import React, { Component } from 'react';
import '../styles/IntroPage.css';
import jake from '../jake.jpg';
import ProfilePicture from './ProfilePicture';

class IntroPage extends Component {

    render() {
        return (
            <div className='container-fluid background-img-intro'>
                <div>
                    <ProfilePicture />
                    <h1>
                        <span className='label label-primary'>Software Developer</span>
                    </h1>
                </div>

            </div>
        );
    }
}

export default IntroPage;