import React, { Component } from 'react';
import '../App.css';
import WhiteCard from './WhiteCard';

//pull from db, pick x cards

class UserHand extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      CARDS_PER_PLAYER: 5,
      username: this.props.username,
      points: 0
    }
  }
  componentDidMount() {
    this.populateHand();
  }
  populateHand(){
    //TODO: populate this arry by pulling from database
    var whiteCards = [
      {answer: "The American Dream"},
      {answer: "Children on Leashes"},
      {answer: "Picking your scabs."},
      {answer: "A saxophone solo."},
      {answer: "Gandalf sax"},
      {answer: "Party at the shire"},
      {answer: "My love life."},
      {answer: "My friends."},
      {answer: "Pizza."},
      {answer: "Upgrading homeless people to mobile hotspots."},
      {answer: "Starving Children."},
      {answer: "Not giving a shit about the third world."},
      {answer: "Hurricane Katrina."},
      {answer: "Vigorous Jazz Hands."},
      {answer: "Raptor attacks."},
      {answer: "Actually taking candy from a baby."},
      {answer: "Children on leashes."},
      {answer: "Cheating in the special olympics"},
      {answer: "Shaquille O'Neal's acting career"},
      {answer: "Bees?"},
      {answer: "A lifetime of sadness."},
      {answer: "The American Dream."},
      {answer: "The Kool-Aid Man."},
      {answer: "A supersoaker filled with cat pee."},
      {answer: "Getting married, having a few kids, buying some stuff, moving to Florida, and dying."},
      {answer: "Batman."}
    ];

    var tempHand = this.shuffleArray(whiteCards, this.state.CARDS_PER_PLAYER);

    this.setState({cards: tempHand});
    console.log(this.state.cards);
  }


  shuffleArray(arr, limit) {
    if(limit > arr.length) {
      limit = arr.length;
    }
    var shuffled = arr.sort(function() {
      return 0.5 - Math.random();
    });
    return shuffled.slice(0, limit);
  }
  render(){
    return(
      <div>
        <h2>{this.state.username}'s Answers</h2><p>Points: {this.state.points}</p>
        <div className="row">
          {this.results()}
        </div>
      </div>
    )
  }

  results(){
    return this.state.cards.map( card =>
      <WhiteCard answer={card.answer}
                  username = {this.state.username}
      />
    )
  }
}

export default UserHand;
