import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Card, CardHeader } from 'material-ui/Card';

class SkillsPage extends Component {

    render() {

        const style = {
            margin: 1,
        };
        let skills = [
            'Java',
            'Python',
            'Web Development',
            'Spring Framework',
            'Project Reactor',
            'Django ',
            'React.js',
            'React Native',
            'AWS',
            'Scrum',
            'Node.js',
            'Atlassian Tools Suite',
            'Spring MVC'
        ];

        return (
            <div className='container'  >
                <h1 className='row col'>Skills</h1>
                <div className='row'>
                    {skills.map(skill =>
                        <Card className='col-lg-3' style={style}>
                            <CardHeader
                                title={skill}
                                avatar={<i class="fa fa-check-square-o fa-2x" aria-hidden="true"></i>}
                            />
                        </Card>

                    )}
                </div>
            </div >
        );
    }
}
export default SkillsPage;