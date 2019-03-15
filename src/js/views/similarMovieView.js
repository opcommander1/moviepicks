import { elements } from './base';

export const clearMovie = () => {
  elements.similarMovieOne.innerHTML = '';
  elements.similarMovieTwo.innerHTML = '';
  elements.similarMovieThree.innerHTML = '';
}

const renderSimilarMovie = similar => {
  const markup = `
  <div class="wrapper">
  <div class="background_suggest">
    <div class="image_suggest">
      <img src="img/ipman.jpeg" alt="">
    </div>
    <div class="title_suggest">
      <h1 class="title">IP MAN</h1>
        <div  class="year_release_suggest">
          <h2>2018 <span class="Genres_suggest"> Drama</span></h2>
        </div>
        <div class="rating">
          <h1>3.6 Stars</h1>
        </div>
    </div>
  </div>
</div>
  `;
  elements.similarMovieOne.insertAdjacentHTML('beforeend', markup)
}