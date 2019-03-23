import axios from 'axios';


  //Search movie api by id and returns actors credits
  export default class Credits {
    constructor(id) {
      this.id = id;
    }

    async getCreditResults() {
      try {
        const res = await axios(`${process.env.MOVIE_PROXY}https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=${process.env.MOVIE_KEY}`);
        this.result = res.data.cast;
      } catch (error) {
        alert(error);
      }
    }
  }