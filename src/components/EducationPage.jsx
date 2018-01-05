import React, { Component } from 'react';
import lehigh from '../LU.png';
import '../styles/EducationPage.css';


class EducationPage extends Component {

    render() {
        return (
            <div className='container-fluid'>

                <div className='row'>
                    <ul className='col-lg-6 list-info'>
                        <h1 className='page-title'>Education</h1>
                        <li className='list-item'> Lehigh University</li>
                        <li className='list-item'>Computer Science and Engineering</li>
                        <li className='list-item' >P.C. Rosin College of Engineering</li>
                        <li className='list-item'>Class of 2016</li>
                        <li></li>
                    </ul>
                    <img className='col-lg-6' src={lehigh} />
                </div >
            </div >
        );
    }
}
export default EducationPage;