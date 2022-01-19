import React, { Component } from 'react';
import './App.css';
import TopHeader from './components/TopHeader';
import Slide from './components/Slide';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='app-header'>
          <TopHeader />
        </header>
        <div className='padding-box'></div>
        <main className='main'>
          <Slide />
        </main>
      </div>
    );
  }
}

export default App;
