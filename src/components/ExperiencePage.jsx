import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import nuwc from '../nuwc.png';
import '../styles/ExperiencePage.css';


function ExperienceCard({ title, duration, logo, bullets }) {
    return (
        <Card>
            <CardHeader
                title={title}
                subtitle={duration}
                avatar={logo}
                className='pad-card '
            />
            <CardText>
                <ul>
                    {bullets.map(b => <li>{b}</li>)}
                </ul>
            </CardText>
        </Card>
    );
}
const work = [
    {
        title: 'Naval Undersea Warfare Center',
        duration: 'Summer 2015, 2016 (Intern)',
        logo: nuwc,
        bullets: [
            'Developer on Java application with Spring framework',
            'Created a Java CLI to parse very large datasets for validity and compute metrics',
            'C++ user interface development with Qt'
        ]
    },
    {
        title: 'Naval Undersea Warfare Center',
        duration: 'January 2017 to Present (Full Time)',
        logo: nuwc,
        bullets: [
            'Developer on Java application using the Spring Framework and JavaFX',
            'Member of an agile software development team using scrum methodology ',
            'Developer on a file transfer web application using Spring MVC and JQuery UI'
        ]
    }
]


class ExperiencePage extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <h1 className='row col'>Professional Experience</h1>
                <div className='col-lg-6 col-lg-offset-3'>
                    {work.map(exp =>
                        <ExperienceCard {...exp} />
                    )}
                </div>
            </div>
        );
    }
}
export default ExperiencePage;