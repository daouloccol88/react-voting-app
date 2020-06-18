import React from "react";
import GameDetails from "./GameDetails";
import Games from "./Games";

class Component extends React.Component {
  state = {
    games: []
  };

  componentDidMount() {
    this.setState({
      games: GameDetails
    });
  }

  voteHandler = gameId => {
    const voteGame = this.state.games.map(footballer => {
      if (gameId === footballer.id) {
        return Object.assign({}, footballer, {
          votes: footballer.votes + 1
        });
      } else {
        return footballer;
      }
    });

    this.setState({
      games: voteGame
    });
  };
  
  render() {
    //sort players with highest votes

    let sortGames = this.state.games.sort((a, b) => {
      return b.votes - a.votes;
    });
    const games = sortGames.map(game => (
      <Games
        key={game.id}
        id={game.id}
        name={game.name}
        votes={game.votes}
        description={game.description}
        developper={game.developper}
        imageUrl={game.imageUrl}
        voteGame={this.voteHandler}
      />
    ));
    return <div className="ui divided unstackable items main">{games}</div>;
  }
}

export default Component;