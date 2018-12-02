import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListPlayers from './ListPlayers';
import AddPlayers from './AddPlayer';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  	state = {
      players: [],
    };

    inputIsEmpty = () => {
      return this.state.value === '';
    };

	handleAddPlayer = player => {
      this.setState(previousState => ({
        players: [...previousState.players, this.state.value],
      }));
    };

	handleDeletePlayer = event => {
      this.setState(previousState => ({ players: this.state.players.slice(0, -1)}));
    }

	

	
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>			
        </header>
		<h2>Players</h2>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="First Name"
            value={this.state.value}
            onChange={this.handleChange}
          />
		 <input
            type="text"
            placeholder="Last Name"
            value={this.state.value}
            onChange={this.handleChange}
          />
		  <input
            type="text"
            placeholder="Username"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>

		<ol className="item-list">
          {this.state.players.map((player, index) => <li key={index}>{player.Username}</li>)}
        </ol>
      </div>
    );
  }
}

export default App;
