export default (name, checked = false) => {
  const isChecked = (isCkd) => isCkd ? `checked` : ``;

  return `
    <input type="radio" id="filter-${name}" name="filter" value="everything" ${isChecked(checked)}>
    <label class="trip-filter__item" for="filter-${name}">${name}</label>
  `;
};
