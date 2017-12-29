import React, { Component } from 'react';

class SkillsPage extends Component {

    render() {
        let skills = [
            'Java',
            'Python',
            'Web Development',
            'Spring Framework',
            'Project Reactor',
            'Django Web Framework',
            'React.js',
            'React Native',
            'Amazon Web Services (AWS)',
            'Scrum',
            'Node.js',
            'Atlassian Tools Suite',
            'Spring MVC'
        ];

        return (
            <div>
                <h1>Skills</h1>
                <div className='row'>
                    {skills.map(skill =>
                        <h1 className='col-lg-4'>
                            <span className="label label-success">{skill}</span>
                        </h1>

                    )}
                </div>
            </div>
        );
    }
}
export default SkillsPage;