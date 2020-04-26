import './styles.css';
import fetchCountry from './js/fetchCountries';
import updateCountryMarkup from './js/update-country-markup';
import refs from './js/refs';

const debounce = require('lodash.debounce');

const debounceCallback = debounce(event => {
  let inputValue = event.target.value;

  refs.countryContainer.innerHTML = '';

  fetchCountry(inputValue).then(updateCountryMarkup);
}, 1000);

refs.searchForm.addEventListener('input', debounceCallback);
