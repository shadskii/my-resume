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
                        <li className='list-item'>Lehigh University 2016</li>
                        <li className='list-item'>Computer Science and Engineering</li>
                        <li className='list-item'>P.C. Rosin College of Engineering</li>
                        <br />
                        <li className='list-item'>Varsity Swim Team</li>
                        <li className='list-item'>●	2013 Lehigh Swimming Male Freshman of the Year</li>
                        <li className='list-item'>● Patriot League Academic Honor Roll</li>
                        <li className='list-item'>●	Lehigh University Record Holder in 4x200 Free Relay and 4x50 Medley Relay</li>
                        <li className='list-item'>● Co-Director of the Academic Leadership Program</li>
                    </ul>
                    <img className='col-lg-6' src={lehigh} />
                </div >
            </div >
        );
    }
}
export default EducationPage;