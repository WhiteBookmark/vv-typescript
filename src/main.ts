import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { ValidationProvider, extend } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';
import vuetify from './plugins/vuetify';

// Add the required rules
extend('required', {
	...required,
	message: 'This field is required',
});
extend('email', email);
extend('min', min);

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
