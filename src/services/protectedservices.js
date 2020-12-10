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

export function movienightCreate(movienightData) {
  return settingService
    .post("/movienight", movienightData)
    .then(console.log("the data was posted to the backend"));
}

export function movienightQuery(data) {
  return settingService
    .put("/movienight", data)
    .then(
      console.log("the rest of the data was updated & posted to the backend")
    );
}
