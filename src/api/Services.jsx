import axios from "axios";

const API_KEY = "7fff77fe"; 
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (searchTerm, page = 1, type = "") => {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}&page=${page}&type=${type}`;
  try {
    const response = await axios.get(url);
    if (response.data.Response === "False") {
      throw new Error(response.data.Error);
    }
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchMovieDetails = async (id) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`;
  try {
    const response = await axios.get(url);
    if (response.data.Response === "False") {
      throw new Error(response.data.Error);
    }
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
