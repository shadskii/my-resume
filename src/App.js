import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SectionsContainer, Section, Header, ScrollToTopOnMount } from 'react-fullpage';
import IntroPage from './components/IntroPage';
import ContactPage from './components/ContactPage';
import SkillsPage from './components/SkillsPage';

class App extends Component {
  render() {
    let options = {
      sectionClassName: 'section',
      anchors: ['intro', 'skills', 'education', 'experience', 'projects', 'contact-me'],
      delay: 500,
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      sectionPaddingTop: '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation: true
    };

    return (
      <div className='container-fluid'>
        <Header>
          <div className='btn-group'>
            <a className='btn btn-default' href="#intro">Intro</a>
            <a className='btn btn-default' href="#skills">Skills</a>
            <a className='btn btn-default' href="#education">Education</a>
            <a className='btn btn-default' href="#experience">Experience</a>
            <a className='btn btn-default' href="#projects">Projects</a>
            <a className='btn btn-default' href="#contact-me">Contact Me</a>
          </div>
        </Header>
        <SectionsContainer  {...options}>
          <ScrollToTopOnMount />
          <Section verticalAlign="true" >
            <IntroPage />
          </Section>
          <Section color="#A7DBD8">
            <SkillsPage />
          </Section>
          <Section color="#E0E4CC">education</Section>
          <Section color="#E0E4CC">experience</Section>
          <Section color="#E0E4CC">projects</Section>
          <Section color="#A7DBD8">
            <ContactPage />
          </Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
