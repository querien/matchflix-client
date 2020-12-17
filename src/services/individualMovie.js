import axios from "axios";
// import successStatus from "./auth";
// import internalServerError from "./auth";

const settingService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/`,
});

//Added a function here
export function updateSingleMovie(singleMovieData) {
  console.log(singleMovieData);
  return settingService
    .post("/room/:id", singleMovieData)
    .then((response) => response);
}

export function updateFinishedUsers(participantData) {
  console.log(participantData);
  return settingService
    .post(`/results/${participantData.movienightID}`, participantData)
    .then((response) => {
      console.log("response from the DB call", response);
      return response;
    });
}

export function getMovieNight(movienightID) {
  return settingService
    .get(`/results/${movienightID}`)
    .then((response) => response);
}
