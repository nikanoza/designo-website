import axios from "axios";

const instance = axios.create({
  baseURL: "https://designo-api-production.up.railway.app/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getCategoryProjects = async (category: string) => {
  return instance.get("/projects/" + category);
};
