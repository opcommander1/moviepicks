import axios from 'axios';
// import {key, proxy } from '../config';
import {s3} from '../config';




export default class Search {
  constructor(query) {
    this.query = query;
  }

  //Finds the requested api movie
  async getMovieResults() {
      try {
        const res = await axios(`${s3.PROXY}https://api.themoviedb.org/3/search/movie?api_key=${s3.KEY}&query=${this.query}`);
        this.result = res.data.results;
      } catch (error) {
        alert(error);
      }
    }
  }

  
