
import tripPointMarkup from './trip-point-markup';

export default (tripPoints) => {
  const tripPointsMarkup = tripPoints.reduce((acc, item) => {
    const {icon, name, time, duration, price, offers} = item;

    acc += tripPointMarkup(icon, name, time, duration, price, offers);

    return acc;
  }, ``);

  return `
    <section class="trip-day">
      <article class="trip-day__info">
        <span class="trip-day__caption">Day</span>
        <p class="trip-day__number">1</p>
        <h2 class="trip-day__title">Mar 18</h2>
      </article>

      <div class="trip-day__items">
        ${tripPointsMarkup}
      </div>
    </section>
  `;
};
