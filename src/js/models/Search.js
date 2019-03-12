import axios from 'axios';
import {key, proxy } from '../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getMovieResults() {
      try {
        const res = await axios(`${proxy}https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.query}`);
        this.result = res.data.results;
        // console.log(this.result);
      } catch (error) {
        alert(error);
      }
    }
  }

  
