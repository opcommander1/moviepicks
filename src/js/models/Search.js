import axios from 'axios';
// import {key, proxy } from '../config';
import {S3} from '../config';




export default class Search {
  constructor(query) {
    this.query = query;
  }

  //Finds the requested api movie
  async getMovieResults() {
      try {
        const res = await axios(`${S3.PROXY}https://api.themoviedb.org/3/search/movie?api_key=${S3.KEY}&query=${this.query}`);
        this.result = res.data.results;
      } catch (error) {
        alert(error);
      }
    }
  }

  
