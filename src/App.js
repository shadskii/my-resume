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
      sectionPaddingTop: '0px',
      sectionPaddingBottom: '0px',
      arrowNavigation: true
    };

    return (
      <div >
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
          <Section
            verticalAlign="true"
            color="#A7DBD8">
            <ContactPage />
          </Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
