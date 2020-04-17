// import './js/all-code';
import './styles.css';

import fetchCountry from './js/fetchCountries';
import updateCountryMarkup from './js/update-country-markup';

const refs = {
  countryContainer: document.querySelector('.js-countries'),
  searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;
  console.log(inputValue);

  refs.countryContainer.innerHTML = '';
  form.reset();
  fetchCountry(inputValue).then(updateCountryMarkup);
});
