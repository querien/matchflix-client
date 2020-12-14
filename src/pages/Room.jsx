import React, { Component } from 'react';
import io from "socket.io-client"


class Room extends Component {
    state = {
        peopleInRoom: []
    }

componentDidMount = () => {
const socket = io("ws://localhost:5005", {query: {user: "Querien2", myUser: JSON.stringify(this.props.user)}}) 
socket.on("some event", responseBack => {
   console.log(responseBack)
   this.updateState(responseBack)
})
}

updateState = (person) => {
    this.setState({peopleInRoom: [...this.state.peopleInRoom, person]})
}

    render() {
        return (
            <div>
                {this.state.peopleInRoom.map(el => <div style={{backgroundColor:"red", height:"50px", marginBottom:"15px"}} >{el}</div>)}
            </div>
        );
    }
}

export default Room;