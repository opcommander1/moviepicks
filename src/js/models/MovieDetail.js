import axios from 'axios';
import {key, proxy } from '../config';

  export default class MovieDetails {
    constructor(id) {
      this.id = id;
    }

    async getMovieDetails() {
      try {
        const res = await axios(`${proxy}https://api.themoviedb.org/3/movie/${this.id}?api_key=${key}&append_to_response=similar`);
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

    check_Dups(randomNumber){
      if (randomNumber[0] == randomNumber[1] || randomNumber[0] == randomNumber[2] || randomNumber[1] == randomNumber[2]) {
        this.getSimilarMovie();
        return true;
      } else {
        return false;
      }
    };

    getSimilarMovie() {
      const randomNum = [];
      for (let i = 0; i < 3; i++) {
        let rand = Math.floor(Math.random() * Math.floor(this.similar.results.length));
        randomNum.push(rand);
      }
        console.log(randomNum);
         return this.check_Dups(randomNum);
        // return randomNum;
        // check_Dups(randomNum);
        // this.similarBackdrop = this.similar.results[0].backdrop_path;
        // this.similarTitle = this.similar.results[0].original_title;
        // this.similarDate = this.similar.results[0].release_date;
        // this.similarRating = this.similar.results[0].vote_average;
    };

    getGenres() {
      const newGenres = [];
      for (let i = 0; i < this.genres.length; i++) {
        newGenres.push(this.genres[i].name);
      }
      return newGenres.join(', ');
    };
  }