import axios from "axios";

export const baseURL = "http://192.168.8.109:8000"; //Home
// export const baseURL = "http://192.168.210.100:8000"; //Work

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
