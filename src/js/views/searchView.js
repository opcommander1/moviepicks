import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = '';
};

export const limitReleaseYear = (year) => {
  const newYear = [];
        newYear.push(year.slice(0,4));
         //return the result
    return `${newYear}`;
      }
  
const renderMovie = movie => {
  const markup = `
  <li>
      <div class="result_data">
        <h3 class="result_title">
          ${movie.title}
        </h3>
        <h3 class="result_year">
          ${limitReleaseYear(movie.release_date)}
        </h3>
      </div>
    </li>
    `;
    elements.searchResults.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = (movies) => {
  movies.forEach(renderMovie)
}