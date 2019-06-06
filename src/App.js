import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import friends from "./friends.json";
import Body from "./components/Body";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    topscore: 0,
    currentscore: 0,
    chosenPokemon: []
  };

  
  pickFriend = id => {
    var shufflePokemon = this.state.friends;
    if (this.state.chosenPokemon.includes(id) && this.state.currentscore > this.state.topscore) {
      this.setState({
        currentscore: 0,
        chosenPokemon: [],
        topscore: this.state.currentscore
      });
    } else if (this.state.chosenPokemon.includes(id)) {
      this.setState({
        currentscore: 0,
        chosenPokemon: []
      });
    } else {
      shufflePokemon.forEach(() => {
        this.setState({
          friends: shufflePokemon.sort(() => Math.random() - 0.5),
          currentscore: this.state.currentscore + 1,
          chosenPokemon: this.state.chosenPokemon.concat([id])
        })
      })
    };
    if (this.state.currentscore === 11) {
      this.setState({
        currentscore: 0,
        chosenPokemon: [],
        topscore: 12
      });
    };
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
      <Nav
      topscore={this.state.topscore}
      currentscore={this.state.currentscore}
      />
      <Body>
        {this.state.friends.map(friend => (
          <FriendCard
          pickFriend={this.pickFriend}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          />
          ))}
        </Body>
      </Wrapper>
    );
  }
}

export default App;