import { elements } from './base';

//Get the movie input from user
export const getInput = () => elements.searchInput.value;

//Clear the input
export const clearInput = () => {
  elements.searchInput.value = '';
};

//Clear the results
export const clearResult = () => {
  elements.searchResults.innerHTML = '';
}

//Shows only the four release year
export const limitReleaseYear = (year) => {
  const newYear = [];
        newYear.push(year.slice(0,4));
         //return the result
    return `${newYear}`;
      }
 
//Shows the results list
const renderMovie = movie => {
  const markup = `
  <li>
      <a href="#${movie.id}">
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

//Shows each results
export const renderResults = (movies) => {
  movies.forEach(renderMovie)
}