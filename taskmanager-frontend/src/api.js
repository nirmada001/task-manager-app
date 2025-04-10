import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7038/api", // Adjust if your API runs on another port
});