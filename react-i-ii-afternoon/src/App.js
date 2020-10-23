import React, {Component} from 'react';
import './App.css'
import Buttons from './Buttons'
class App extends Component{
  render(){
    return(
      <div className="body">
        <header className="header">
          <h2>Home</h2>
        </header>
        <main className="main">
        <div className="buttons">
          <Buttons/>
        </div>
        </main>
      </div>
    )
  }
}

export default App