import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import players from "./players.json";
import "./App.css";

class App extends Component {
 
  state = {
    players
  };

  removePlayer = id => {
   
    const players = this.state.players.filter(player => player.id !== id);
    this.setState({ players });
  };

  
  render() {
    return (
      <Wrapper>
        <Title>NBA Players List</Title>
        {this.state.players.map(player => (
          <GameCard
            removePlayer={this.removePlayer}
            id={player.id}
            key={player.id}
            name={player.name}
            image={player.image}
            occupation={player.occupation}
            location={player.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;