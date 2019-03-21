import axios from 'axios';
// import {key, proxy } from '../config';




export default class Search {
  constructor(query) {
    this.query = query;
  }

  //Finds the requested api movie
  async getMovieResults() {
      try {
        const res = await axios(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=3d6ac87c32c71a4673657cec3692d846&query=${this.query}`);
        this.result = res.data.results;
      } catch (error) {
        alert(error);
      }
    }
  }

  
