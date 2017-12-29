import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SectionsContainer, Section, Header, Footer } from 'react-fullpage';
import jake from './jake.jpg'


class App extends Component {
  render() {
    let options = {
      sectionClassName: 'section',
      anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
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
            <div>
              <div className='row col'>
                <img className='img-circle ' src={jake} />
              </div>

              <div className='row col'>
                <h1 ><span className='label label-primary'>Developer</span></h1>
              </div>
            </div>
          </Section>
          <Section color="#A7DBD8">Page 2</Section>
          <Section color="#E0E4CC">Page 3</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
