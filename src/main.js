import filterMarkup from './filter-markup';

const $filters = document.querySelector('.trip-filter');

const FILTERS = [
  {name: `Everything`, checked: true},
  {name: `Future`},
  {name: `Past`}
];

const flushFilters = () => {
  $filters.innerHTML = ``;
};

const renderFilters = () => {
  return FILTERS.forEach(({name, checked}) => {
    $filters.innerHTML += filterMarkup(name, checked);
  });
}

flushFilters();
renderFilters();
