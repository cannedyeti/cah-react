import React, { Component } from 'react';
import BlackCard from './BlackCard';
import UserHand from './UserHand';
import '../App.css';

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            round: 0,
            users: [{username: "Dude"}, {username: "Man"}, {username: "Lady"}]
        };
    }
    render() {
        return (
            <div>
                <div className="row center-align">
                    <h4>Round: {this.state.round}</h4>
                    <BlackCard />
                </div>
                {this.results()}
            </div>
        )
    }
    results(){
        return this.state.users.map( user =>
            <UserHand username={user.username}
            />
        )
    }
}

export default GameBoard;