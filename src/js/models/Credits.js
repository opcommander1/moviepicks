import axios from 'axios';
import {key, proxy } from '../config';

  //Search movie api by id and returns actors credits
  export default class Credits {
    constructor(id) {
      this.id = id;
    }

    async getCreditResults() {
      try {
        const res = await axios(`${proxy}https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=${key}`);
        this.result = res.data.cast;
      } catch (error) {
        alert(error);
      }
    }
  }