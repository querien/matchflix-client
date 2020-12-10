import axios from "axios";
import successStatus from "./auth";
import internalServerError from "./auth";

const settingService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/`,
});

export function settings(credentials) {
  return settingService
    .post("/settings", credentials)
    .then(successStatus)
    .catch(internalServerError);
}
