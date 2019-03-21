import axios from 'axios';
// import {key, proxy } from '../config';





export default class Search {
  constructor(query) {
    this.query = query;
  }

  //Finds the requested api movie
  async getMovieResults() {
      try {
        const res = await axios(`${process.env.PROXY}https://api.themoviedb.org/3/search/movie?api_key=${process.env.KEY}&query=${this.query}`);
        this.result = res.data.results;
      } catch (error) {
        alert(error);
      }
    }
  }

  
