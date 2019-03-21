import axios from 'axios';
// import {key, proxy } from '../config';
import {S3} from '../config';

  //Search movie api by id and returns actors credits
  export default class Credits {
    constructor(id) {
      this.id = id;
    }

    async getCreditResults() {
      try {
        const res = await axios(`${S3.PROXY}https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=${S3.KEY}`);
        this.result = res.data.cast;
      } catch (error) {
        alert(error);
      }
    }
  }