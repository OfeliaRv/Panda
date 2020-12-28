import React, { Component } from 'react';
import '../src/assets/styles/style.css'
import Header from './components/layout/Header/Header';
import UpperSection from './components/UpperSection/UpperSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <UpperSection />
      </div>
    );
  }
}

export default App;
