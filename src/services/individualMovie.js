import axios from "axios";
// import successStatus from "./auth";
// import internalServerError from "./auth";

const settingService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/`,
});

//Added a function here
export function eachMovie(singlemovie) {
  axios.post("/room/:id", singlemovie).then((response) => response);
}
