import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SectionsContainer, Section, Header, Footer } from 'react-fullpage';
import IntroPage from './components/IntroPage';
import jake from './jake.jpg'


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
          <a href="#sectionOne">Section One</a>
          <a href="#sectionTwo">Section Two</a>
          <a href="#sectionThree">Section Three</a>
        </Header>
        <SectionsContainer  {...options}>
          <Section verticalAlign="true" >
            <IntroPage />
          </Section>
          <Section color="#A7DBD8">skills</Section>
          <Section color="#E0E4CC">education</Section>
          <Section color="#E0E4CC">experience</Section>
          <Section color="#E0E4CC">projects</Section>
          <Section color="#A7DBD8">contact me</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
