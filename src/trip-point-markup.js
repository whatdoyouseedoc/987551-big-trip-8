import offerMarkup from './offer-markup';

export default (icon, name, time, duration, price, offers) => {
  let offersMarkup = offers.reduce((acc, item) => {
    acc += offerMarkup(item.name);

    return acc;
  }, ``);

  return `
    <article class="trip-point">
      <i class="trip-icon">${icon}</i>
      <h3 class="trip-point__title">${name}</h3>
      <p class="trip-point__schedule">
        <span class="trip-point__timetable">${time}</span>
        <span class="trip-point__duration">${duration}</span>
      </p>
      <p class="trip-point__price">${price}</p>
      <ul class="trip-point__offers">
        ${offersMarkup}
      </ul>
    </article>
  `;
};
