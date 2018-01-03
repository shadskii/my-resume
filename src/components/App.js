import React, { Component } from 'react';
import '../styles/App.css';
import { SectionsContainer, Section, Header, ScrollToTopOnMount } from 'react-fullpage';
import IntroPage from './IntroPage';
import ContactPage from './ContactPage';
import SkillsPage from './SkillsPage';
import ExperiencePage from './ExperiencePage';

class App extends Component {
  render() {
    let options = {
      sectionClassName: 'section',
      anchors: ['intro', 'skills', 'experience', 'projects', 'education', 'contact-me'],
      delay: 500,
      scrollBar: false,
      navigation: false,
      verticalAlign: false,
      sectionPaddingTop: '0px',
      sectionPaddingBottom: '0px',
      arrowNavigation: true
    };

    return (
      <div >
        <ScrollToTopOnMount />
        <SectionsContainer  {...options}>

          <Section verticalAlign="true" >
            <IntroPage />
          </Section>
          <Section color="#A7DBD8">
            <SkillsPage />
          </Section>
          <Section color="#E0E4CC">
            <ExperiencePage />
          </Section>
          <Section color="#A7DBD8">projects</Section>
          <Section color="#E0E4CC">education</Section>
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
