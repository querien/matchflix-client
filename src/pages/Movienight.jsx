import React, { Component } from 'react';
import {movienightCreate} from "../services/protectedservices"
import {movienightQuery} from "../services/protectedservices"
import {genres} from "../genres.json"

const importedGenres = genres;
const importedGenreArr = (Object.keys(importedGenres[0]))

class Movienight extends Component {
state =  {
    roomCreated: false,
    roomName: "",
    roomPassword: "",
    movieArray: [],
    numberMovies: 0,
    genre: "",
    imdbScore: 0,
    participants:""
}


handleCreateNight = (event) =>  {
    event.preventDefault()
    this.setState({
        roomCreated: true
    })  
}

handleQuery = (event) => {
    event.preventDefault()
    
const movieQueryData = {
    numberMovies: this.state.numberMovies,
    genre: this.state.genre,
    imdbScore: this.state.imdbScore,
    host: this.props.user._id,
    roomName: this.state.roomName,
    roomPassword:this.state.roomPassword,
    participants: this.state.participants,
    }
    movienightCreate(movieQueryData).then((res) => {
    console.log(res)}) 
    } 

handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(this.state[name])
    this.setState({
      [name]: value,
    });
  };

render() {
        if (this.state.roomCreated) {
            return (<form onSubmit={this.handleQuery } action="">
            <label htmlFor="genre">Select the genre</label> 
            <select onChange={this.handleInputChange} name="genre" id="genre">
            {importedGenreArr.map((element)=> {
             return <option key={element} value={element}>{element}</option>
            })}
            </select><br/>

            <label htmlFor="numberMovies">How many movies?</label>
            <input name="numberMovies" onChange={this.handleInputChange} type="number"/> <br/>
            <label htmlFor="imdbScore">Minimum IMDB rating</label>
            <input name="imdbScore" onChange={this.handleInputChange} type="number"/> <br/>
            <button>Generate movies!</button>
            
        </form>)
        } else { 
            return ( <div>
                <h1>Create your movie night</h1>
                <form onSubmit={this.handleCreateNight} action="">
                    <label htmlFor="roomName">Enter your room name</label>
                    <input name = "roomName" onChange={this.handleInputChange} type="text" placeholder="Room name"/> <br/>
                    <label htmlFor="roomPassword">Enter your room password</label>
                    <input name = "roomPassword" onChange={this.handleInputChange} type="password" placeholder="Password"/><br/>
                    <label htmlFor="participants">Enter number of participants</label>
                    <input name = "participants" onChange={this.handleInputChange} type="number"/> <br/> 
                    <button type="submit" >Create movie night!</button>
                </form>
            </div>
        );
    }
}
}

export default Movienight;