import Vue from 'vue';
import { TextInput, BaseButton, DropdownSelect } from '@patricia_engineering/patricia-ui-components';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.component('text-input', TextInput);
Vue.component('base-button', BaseButton);
Vue.component('drop-down', DropdownSelect);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
