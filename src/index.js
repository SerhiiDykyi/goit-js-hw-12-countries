import './styles.css';
import fetchCountry from './js/fetchCountries';
import updateCountryMarkup from './js/update-country-markup';
import refs from './js/refs';

// import PNotify from 'pnotify/dist/es/PNotify';
// import 'pnotify/dist/es/PNotifyStyleMaterial';
// import 'material-design-icons/iconfont/material-icons.css';
// PNotify.defaults.styling = 'material';
// PNotify.defaults.icon = 'material';

const debounce = require('lodash.debounce');

const debounceCallback = debounce(event => {
  let inputValue = event.target.value;

  refs.countryContainer.innerHTML = '';

  fetchCountry(inputValue).then(
    updateCountryMarkup,
    console.log('Почему я вызываюсь, если вернулась ошибка???'),
  );
  // .catch(
  //   PNotify.error({
  //     title: 'Oh No!',
  //     text: 'Enter the name of the country correctly!!',
  //   }),
  // );
}, 1000);

refs.searchForm.addEventListener('input', debounceCallback);
