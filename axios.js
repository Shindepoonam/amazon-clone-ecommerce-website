import axios from "./axios";

const instance = axios.create ( {
  
  baseURL: "http://127.0.0.1:5001/web-app-ac078/us-central1/api"  
  // THE API (cloud function) URL
  
});

export default instance;
