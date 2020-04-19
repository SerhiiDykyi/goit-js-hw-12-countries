import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/es/PNotifyStyleMaterial';
// import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

PNotify.defaults.styling = 'material';
PNotify.defaults.icon = 'material';

// PNotify.error({
//   title: 'Oh No!',
//   text: 'Something terrible happened.',
// });

PNotify.success({
  title: 'Success!',
  text: 'That thing that you were trying to do worked.',
});
