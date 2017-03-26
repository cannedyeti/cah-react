import React, { Component } from 'react';
import '../App.css';

class BlackCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      card: {}
    }
  }
  componentDidMount() {
    this.populateBlackCard();
  }

  populateBlackCard() {
    //TODO: get cards from database
    var blackCards = [
      { question: "This is your captain speaking. Fasten your seatbelts and prepare for ______.", blanks: 1},
      { question: "This month’s Cosmo: “Spice up your sex life by bringing ______ into the bedroom.”" , blanks: 1},
      { question: "Tonight on 20/20: What you don’t know about ______ could kill you." , blanks: 1},
      { question: "You haven’t truly lived until you’ve experienced ______ and ______ at the same time." , blanks: 2},
      { question: "A remarkable new study has shown that chimps have evolved their own primitive version of _____." , blanks: 1},
      { question: "What’s harshing my mellow, man?" , blanks: 1},
      { question: "Your persistence is admirable, my dear Prince. But you cannot win my heart with _____ alone." , blanks: 1},
    ]

    var index = this.pickCardIndex(blackCards.length);
    this.setState({card: blackCards[index]});

  }

  pickCardIndex(size){
    return Math.floor(Math.random() * size);
  }

  render(){
    return(
      <div className='col s3'>
        <div className='card'>
          <h4 className="card-title">{this.state.card.question}</h4>
          <h6>Cards Against Assembly</h6>
        </div>
      </div>
    )
  }

}

export default BlackCard;
