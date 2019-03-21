import axios from 'axios';
// import {key, proxy } from '../config';

  export default class MovieDetails {
    constructor(id) {
      this.id = id;
    }

    //Gets movie detail id and finds similar movies
    async getMovieDetails() {
      try {
        const res = await axios(`${process.env.PROXY}https://api.themoviedb.org/3/movie/${this.id}?api_key=${process.env.KEY}&append_to_response=similar`);
        this.backdrop = res.data.backdrop_path;
        this.genres = res.data.genres;
        this.overview = res.data.overview;
        this.rating = res.data.vote_average;
        this.title = res.data.title;
        this.date = res.data.release_date;
        this.similar = res.data.similar;
      } catch (error) {
        alert(error);
      }
    };

    //Returns 3 random number to get similar movies id
    getSimilarMovie() {
      let randomNum = [];
      let random = () => {
      for (let i = 0; i < 3;) {
        let rand = Math.floor(Math.random() * Math.floor(this.similar.results.length));
          if (rand == randomNum[0] || rand == randomNum[1] || rand == randomNum[2] && i == 0) {
          i = 0;
          } else if (rand == randomNum[0] || rand == randomNum[1] || rand == randomNum[2] && i > 0) {
          i--;
          } else {
          randomNum.push(rand);
          i++;
          }
      }
    }
    random();
    return randomNum.slice(0, 3);
    };

    //Push movie genres into a single array
    getGenres() {
      const newGenres = [];
      for (let i = 0; i < this.genres.length; i++) {
        newGenres.push(this.genres[i].name);
      }
      return newGenres.join(', ');
    };
  }