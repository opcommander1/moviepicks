export const elements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search_field'),
  searchResults: document.querySelector('.results'),
  actorsResults: document.querySelector('.actors') 
}

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

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementsStrings.loader}`)
  if (loader) loader.parentElement.removeChild(loader);
}

