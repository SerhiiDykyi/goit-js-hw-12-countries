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
    return;
  }
  if (nameCountry.length === 1) {
    const markup = countri(nameCountry);
    refs.countryContainer.insertAdjacentHTML('beforeend', markup);
    PNotify.success({
      title: 'Success!',
      text: 'The country you were looking for!',
    });
    return;
  }
  if (nameCountry.length > 10) {
    return PNotify.error({
      title: 'Oh No!',
      text: 'Enter the country name correctly!',
    });
  }
  const markup = countriesLinks(nameCountry);
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateCountryMarkup;
