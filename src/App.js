import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Column from "./components/Column";
import Row from "./components/Row";
import cards from "./cards.js";


function shuffleArray(arr)
{
  let count = arr.length;

  while(count > 0)
  {
    let index = Math.floor(Math.random() * count);
    count--;
    let temp = arr[count];
    arr[count] = arr[index];
    arr[index] = temp;
  }
  return arr;
}

class App extends Component {

  state = {
    cards,
    scores: 0,
    highscore: 0,
    result: "",
    selected: [],
    gameOver: false
  };

  componentDidMount()
  {
    this.setState({result: "Click any Card to get started"});
  }

  clickedCard = (id) => {
    if(!this.state.selected.includes(id))
    {
      this.scoreIncrease();
      this.state.selected.push(id);
      this.setState({gameOver: false});
    }
    else
    {
      this.restartGame();
    }
  }

  scoreIncrease = () => {
    let points = this.state.scores + 1;

    if(points === this.state.cards.length)
    {
      this.setState({
        result: "You win Game!! To play again start clicking",
        highscore: points,
        scores: 0,
        selected: [],
        cards,
        gameOver: false
      })
    }
    else if(points > this.state.highscore)
    {
      this.setState({
        highscore: points,
        scores: points,
        result: "Hey! You got new HighScore",
      })
    } else {
      this.setState({
        scores: points,
        result: "Right!!"
      });
    }
    this.resetArr();
  }

  restartGame = () => {
    this.setState({
      scores: 0,
      highscore: this.state.highscore,
      result: "Loss! Start Clicking to try again",
      selected: [],
      cards,
      gameOver: true
    });
    this.resetArr();
  }

  resetArr = () => {
    let newshuffle = shuffleArray(cards);
    this.setState({cards: newshuffle});
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar 
          header = "Card Clicker"
          scores = {this.state.scores}
          highscore = {this.state.highscore}
        />
        <Wrapper result={this.state.result}>
          Select each card without any duplicates, you win the game!
        </Wrapper>
        <Container>
          <Row wrong={this.state.gameOver}>
            {this.state.cards.map(card => (
              <Column key={card.id}>
                <Card
                  id={card.id}
                  image={card.image}
                  clickedCard={this.clickedCard}
                  scoreIncrease={this.scoreIncrease}
                  restartGame={this.restartGame}
                  resetArr={this.resetArr}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
