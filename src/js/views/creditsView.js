import { elements } from './base';

let actorsArrayIndex = 0;

export const clearCredits = () => {
  elements.actorsResults.innerHTML = '';
};

const actorsCounter = () => {
    return actorsArrayIndex += 1;
};

const renderActors = credits => {
  const markup = `
    <li class="actors_items">
        <div class="actor_img">
          <img src="https://image.tmdb.org/t/p/w500${credits.profile_path}" alt="">
          <div class="actor_name">
            <h3>${credits.name}</h3>
          </div>
            <div class="stage_name">
              <h3>${credits.character}</h3>
            </div>
        </div>
      </li>
      `;
      actorsCounter();
      elements.actorsResults.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = (actors) => {
  for (let i = 0; i < 3; i++){
    [actors[i]].forEach(renderActors);
  }
}