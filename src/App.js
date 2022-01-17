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
        <main>
          <Slide />
        </main>
      </div>
    );
  }
}

export default App;

// import React from 'react';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;