import countriesLinks from '../templates/country-link.hbs';
import countri from '../templates/country-information.hbs';
import refs from './refs';

import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/es/PNotifyStyleMaterial';
import 'material-design-icons/iconfont/material-icons.css';
PNotify.defaults.styling = 'material';
PNotify.defaults.icon = 'material';

function updateCountryMarkup(nameCountry) {
  if (!nameCountry.length) {
    return nameCorrectly();
  }
  if (nameCountry.length === 1) {
    return lookingCountry(nameCountry);
  }
  if (nameCountry.length > 10) {
    return moreSpecificQuery();
  }
  const markup = countriesLinks(nameCountry);
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateCountryMarkup;

const nameCorrectly = () => {
  PNotify.error({
    title: 'Oh No!',
    text: 'Enter the country name correctly!!',
  });
};

const lookingCountry = nameCountry => {
  const markup = countri(nameCountry);
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
  PNotify.success({
    title: 'Success!',
    text: 'The country you were looking for!',
  });
};

const moreSpecificQuery = () => {
  PNotify.error({
    title: 'Oh No!',
    text: 'Too many matches found. Please enter a more specific query!',
  });
};
