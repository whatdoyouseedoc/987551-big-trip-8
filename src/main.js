import filterMarkup from './filter-markup';
import tripPointsMarkup from './trip-points-markup';
import filters from './filters';
import tpMocks from './tp-mocks';
import {getRandomInt} from './utils';

const $filters = document.querySelector('.trip-filter');
const $tripPoints = document.querySelector('.trip-points');

const flushFilters = () => {
  $filters.innerHTML = ``;
};

const renderFilters = (filters) => {
  filters.forEach(({name, checked}) => {
    $filters.innerHTML += filterMarkup(name, checked);
  });
}

const flushTripPoints = () => {
  $tripPoints.innerHTML = ``;
};

const renderTripPoints = (tripPoints) => {
  $tripPoints.innerHTML += tripPointsMarkup(tripPoints);
};

/* Main */
flushFilters();
renderFilters(filters);
flushTripPoints();
renderTripPoints(tpMocks);

$filters.addEventListener('click', event => {
  const tps = Array(getRandomInt(1, 4)).fill(0).map((item, i) => tpMocks[i]);

  flushTripPoints();
  renderTripPoints(tps);
});
