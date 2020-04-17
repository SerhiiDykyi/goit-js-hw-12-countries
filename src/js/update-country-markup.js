import countries from '../templates/menu-items.hbs';

const refs = {
  countryContainer: document.querySelector('.js-countries'),
  searchForm: document.querySelector('.js-search-form'),
};

function updateCountryMarkup(nameCountry) {
  console.log(nameCountry);
  const markup = countries(nameCountry);
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateCountryMarkup;
