import axios from 'axios';
import {key, proxy } from '../config';

  export default class Credits {
    constructor(id) {
      this.id = id;
    }

    async getCreditResults() {
      try {
        const res = await axios(`${proxy}https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=${key}`);
        this.result = res.data.cast;
        // for (let i = 0; i < res.data.cast.length; i++){
        //   this.name = res.data.cast[i].name;
        //   this.character = res.data.cast[i].character;
        //   this.image = res.data.cast[i].profile_path;
        //   // console.log(this.name, this.character, this.profile_path);
        // };
      } catch (error) {
        alert(error);
      }
    }
  }