import axios from 'axios';



export default class Search {
  constructor(query) {
    this.query = query;
  }

  //Finds the requested api movie
  async getMovieResults() {
      try {
        const res = await axios(`${process.env.MOVIE_PROXY}https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_KEY}&query=${this.query}`);
        this.result = res.data.results;
      } catch (error) {
        alert(error);
      }
    }
  }

  
