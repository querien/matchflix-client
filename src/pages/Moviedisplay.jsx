import React, { Component } from "react";

class Moviedisplay extends Component {
  state = {
    movieArr: [],
    score: [],
    element: 0,
    counter: 0,
  };

  componentDidMount() {}

  //Steps in rendering of the movies
  //Load the array incl images
  //Then loop over the object and display each movie title, description and image

  //The right button both increases score property by 1 and goes the next element of the loop
  handleRightButton() {
    this.setState({
      // element: element + 1,
      // score: { title: "String", score: 0 },
    });
  }

  //The Left button only renders the next element
  handleLeftButton() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <h2>The movies are supposed to be displayed here</h2>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.handleLeftButton()}>
          Increase counter{" "}
        </button>
        <button onClick={() => this.handleRightButton()}>Like</button>

        {/* Take an array of movieobjects, loop over them using map and for in 
array.map(element, index => {
  for property in element {
    <img> 
    <title> 
    <description> 
}   



*/}
      </div>
    );
  }
}

export default Moviedisplay;
