//Adds html elements classes and id to the document query selector
export const elements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search_field'),
  searchResults: document.querySelector('.results'),
  actorsResults: document.querySelector('.actors'), 
  movieDetails: document.querySelector('#movies_display'),
  similarMovieOne: document.querySelector('.similar_movie'),
  similarMovieTwo: document.querySelector('.similar_movie_two'),
  similarMovieThree: document.querySelector('.similar_movie_three')
}

//Loads loader icon when api search for movie
export const elementsStrings = {
  loader: 'loader'
}

export const renderLoader = parent => {
  const loader = `
    <div class="${elementsStrings.loader}">
      <svg>
        <use href="img/icons.svg#icon-cw"></use>
      </svg>
    </div>
  `;
  parent.insertAdjacentHTML('afterbegin', loader);
};

//Remove the loader from the interface when search is complete
export const clearLoader = () => {
  const loader = document.querySelector(`.${elementsStrings.loader}`)
  if (loader) loader.parentElement.removeChild(loader);
}

