import axios from 'axios';
import {key, proxy } from './config';


  async function getResults(query) {
    try {
      const res = await axios(`${proxy}https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`);
      console.log(res)
      } catch (error) {
        alert(error)
      }
    }

  getResults('matrix');