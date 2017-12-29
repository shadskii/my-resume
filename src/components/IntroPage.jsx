import React, { Component } from 'react';
import jake from '../jake.jpg';

class IntroPage extends Component {

    render() {
        return (
            <div>
                <div className='row col'>
                    <img className='img-circle ' src={jake} />
                </div>

                <div className='row col'>
                    <h1 ><span className='label label-primary'>Developer</span></h1>
                </div>
            </div>
        );
    }
}

export default IntroPage;