import Search from './models/Search';
import Credits from './models/Credits';
import MovieDetails from './models/MovieDetail';
import * as searchView from './views/searchView';
import * as creditsView from './views/creditsView';
import * as movieDetailsView from './views/MovieDetailView'; 
import { elements, renderLoader, clearLoader } from './views/base';







const state = {};

/** Search Controller */
const controlSearch = async () => {
  // Get query from view
  const query = searchView.getInput();
  console.log(query);

  if (query) {
    // New search object and add to state
    state.search = new Search(query);
    console.log(state.search);
    // state.credits = new Credits(603);
    // console.log(state.credits);

    // 3 Prepare UI for results
    searchView.clearInput();
    searchView.clearResult();
  

    try {
    // Search for Movies
    await state.search.getMovieResults();
    // await state.credits.getCreditResults();

    // Render results on UI
    searchView.renderResults(state.search.result)
    // console.log(state.search.result);
    // console.log(state.credits);
   
    // console.log(state.credits.result);
    } catch (error) {
      alert('Something wrong with the search');
    }
  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
  movieInfoControler();
});

/** Credits-Actors Information Controller */
//Get ID from url
const controlCredits = async () => {
  const id = window.location.hash.replace('#', '');
  // console.log(id);

  if (id) {

    // Prepare UI for changes
    creditsView.clearCredits();
    renderLoader(elements.actorsResults);

    // Create new credits objects
    state.credits = new Credits(id);

    try {
    // Get credits data
    await state.credits.getCreditResults();

    // Render credits information to UI
    clearLoader();
    creditsView.renderResults(state.credits.result);
    // console.log(state.credits.result);
    } catch (error) {
      alert('Something wrong with the search')
    }
  }
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlCredits));

/**Movie Information Display Controller */

const movieInfoControler = async () => {
  const id = window.location.hash.replace('#', '');
  console.log(id);

  if (id) {
  //Prepare UI for changes
  movieDetailsView.clearMovie();
  renderLoader(elements.movieDetails);
  
  //Create a new MovieDetail Object
  state.movie = new MovieDetails(id);

  try {
  //Get movie detail
  await state.movie.getMovieDetails();
  console.log(state.movie);

  // Get all Genres in a single array
   const genres = state.movie.getGenres();
   console.log(genres);
  
  //Render movie detail to UI
  clearLoader();
  movieDetailsView.renderMovieDetail(state.movie, genres);
    } catch (error){
      alert('Something went wrong with the search');
    }
  }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, movieInfoControler));


