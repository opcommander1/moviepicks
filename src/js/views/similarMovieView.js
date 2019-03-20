import { elements } from './base';

//Clear similar movie
export const clearSimilarMovies = () => {
  elements.similarMovieOne.innerHTML = '';
  elements.similarMovieTwo.innerHTML = '';
  elements.similarMovieThree.innerHTML = '';
}

//Shows only the four digit release year
export const limitSimilarReleaseYear = (year) => {
  const newYear = [];
        newYear.push(year.slice(0,4));
         //return the result
    return `${newYear}`;
      }

//Shows similar movies to the interface
export const renderSimilarMovie = (similar, index) => {
  const markupOne = `
  <div class="wrapper">
  <div class="background_suggest">
    <div class="image_suggest">
      <img src="https://image.tmdb.org/t/p/w500${similar[index[0]].backdrop_path}" alt="No Image">
    </div>
    <div class="title_suggest">
      <h1 class="title">${similar[index[0]].title}</h1>
        <div class="year_release_suggest">
          <h2>${limitSimilarReleaseYear(similar[index[0]].release_date)}</h2>
        </div>
        <div class="rating">
          <h1>${similar[index[0]].vote_average} Stars</h1>
        </div>
    </div>
  </div>
</div>
  `;


  const markupTwo = `
  <div class="wrapper">
  <div class="background_suggest">
    <div class="image_suggest">
      <img src="https://image.tmdb.org/t/p/w500${similar[index[1]].backdrop_path}" alt="No Image">
    </div>
    <div class="title_suggest">
      <h1 class="title">${similar[index[1]].title}</h1>
        <div class="year_release_suggest">
          <h2>${limitSimilarReleaseYear(similar[index[1]].release_date)}</h2>
        </div>
        <div class="rating">
          <h1>${similar[index[1]].vote_average} Stars</h1>
        </div>
    </div>
  </div>
</div>
  `;


  const markupThree = `
  <div class="wrapper">
  <div class="background_suggest">
    <div class="image_suggest">
      <img src="https://image.tmdb.org/t/p/w500${similar[index[2]].backdrop_path}" alt="No Image">
    </div>
    <div class="title_suggest">
      <h1 class="title">${similar[index[2]].title}</h1>
        <div class="year_release_suggest">
          <h2>${limitSimilarReleaseYear(similar[index[2]].release_date)}</h2>
        </div>
        <div class="rating">
          <h1>${similar[index[2]].vote_average} Stars</h1>
        </div>
    </div>
  </div>
</div>

  `;
  elements.similarMovieOne.insertAdjacentHTML('beforeend', markupOne);
  elements.similarMovieTwo.insertAdjacentHTML('beforeend', markupTwo);
  elements.similarMovieThree.insertAdjacentHTML('beforeend', markupThree);
}