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
