import React, { Component } from 'react';
import '../App.css';

class WhiteCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      answer: this.props.answer
    }
  }

  render(){
    return(
      <div className='col s3'>
        <div className='answer-card'>
          <h4 className="card-title">{this.state.answer}</h4>
          <h6>Cards Against Assembly</h6>
        </div>
      </div>
    )
  }

}

export default WhiteCard;
