import React, { Component } from 'react';
import '../App.css';

class WhiteCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      answer: this.props.answer,
      username: this.props.username,
      color: "black"
    }
  }
  handleClick(){
        if (this.state.color === 'black'){
            this.setState({color: 'red'});
        } else {
            this.setState({color: 'black'});
        }
    }
  render(){
    return(
      <div className='col s3'>
        <div onClick={this.handleClick.bind(this)} className={`answer-card ${this.state.color} `}>
          <h4 className="card-title">{this.state.answer}</h4>
          <h6>Cards Against Assembly</h6>
        </div>
      </div>
    )
  }

}

export default WhiteCard;
