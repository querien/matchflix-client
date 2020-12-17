import React, { Component } from "react";

export default class Results extends Component {
  render() {
    return this.state.results.map((element, index) => {
      return (
        <div className="ResultsContainer">
          <div className="background">
            <img
              className="posterStyling"
              src={`https://image.tmdb.org/t/p/original/${element.poster_path}`}
              alt="movie poster"
              style={{ width: "200px" }}
            />
            <p className="layer">{index + 1}</p>
          </div>

          <table>
            <tr>
              <td>{element.title}</td>
            </tr>
            <tr>
              <td>{element.overview}</td>
            </tr>
            <tr>
              <td>Likes: {element.numVotes}</td>
            </tr>
            <tr>
              <td> Rating: {element.vote_average}</td>
            </tr>
          </table>
        </div>
      );
    });
  }
}

//     <table className="resultsContainerSub">
//     <tr>
//     <td> <p classname="movieTitle"> </p> </td>
//     </tr>
//     <tr> <td> <p className="description phoneContainer">
//
//   </p></td> </tr>
//   <tr> <td><p>Rating: {element.vote_average}</p></td></tr>
//   <tr><td> <p>Number of votes: {element.numVotes}</p></td></tr>
// </table>
