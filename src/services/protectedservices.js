import axios from "axios";
// import successStatus from "./auth";
// import internalServerError from "./auth";

const settingService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/`,
});

export function settings(credentials) {
  return settingService
    .put("/settings", credentials)
    .then(console.log("the function reaches this"));
  // .catch(internalServerError);
}
