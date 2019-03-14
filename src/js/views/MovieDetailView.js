import { elements } from './base';

export const clearMovie = () => {
  elements.movieDetails.innerHTML = '';
}

export const limitMovieReleaseYear = (year) => {
  const newYear = [];
        newYear.push(year.slice(0,4));
         //return the result
    return `${newYear}`;
      }

export const renderMovieDetail = (detail, newGenres) => {
  const markup = `
  <div class="title_image">
    <img src="https://image.tmdb.org/t/p/w500${detail.backdrop}" alt="No Image">
  </div>
    <div class="background_display">
            <div class="title">
              <h1>${detail.title}</h1>
            </div>
            <div class="year_release">
              <h2>${limitMovieReleaseYear(detail.date)} <span class="Genres"> ${newGenres}</span></h2>
            </div>
            <div class="summary">
              <p>${detail.overview}</p>
            </div>
        <div class="rating">
          <h1>${detail.rating} out of 10</h1>
        </div>
      </div>
  `;
  elements.movieDetails.insertAdjacentHTML('beforeend', markup);
}
