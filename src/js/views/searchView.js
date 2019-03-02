import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = '';
};


const renderMovieResults = movie => {
  const markup = `
  <li>
      <div class="result_data">
        <h3 class="result_title">
          Title
        </h3>
        <h3 class="result_year">
          1997
        </h3>
      </div>
    </li>
    `;
    elements.searchResults.insertAdjacentHTML('beforeend', markup);
};