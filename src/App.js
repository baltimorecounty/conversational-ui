import React, { Component } from 'react';
import './App.css';
import Questionnaire from './components//questionnaire'
import Messages from './data.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Questionnaire 
          messages={Messages} />
      </div>
    );
  }
}
export default App;
