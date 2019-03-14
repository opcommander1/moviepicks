import axios from 'axios';
import {key, proxy } from '../config';

  export default class MovieDetails {
    constructor(id) {
      this.id = id;
    }

    async getMovieDetails() {
      try {
        const res = await axios(`${proxy}https://api.themoviedb.org/3/movie/${this.id}?api_key=${key}`);
        this.backdrop = res.data.backdrop_path;
        this.genres = res.data.genres;
        this.overview = res.data.overview;
        this.rating = res.data.vote_average;
      } catch (error) {
        alert(error);
      }
    }
  }