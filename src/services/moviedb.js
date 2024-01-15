import axios from 'axios'

const KEY = import.meta.env.VITE_API_KEY
const baseUrl = `https://www.omdbapi.com/?apikey=${KEY}`

const getMovies = (str) => {
  const url = `${baseUrl}&s=${str}`
  return axios.get(url)
}

const getMovieById = (id) => {
  const url = `${baseUrl}&i=${id}`
  return axios.get(url)
}


export default {
  getMovies,
  getMovieById
}

