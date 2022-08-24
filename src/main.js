import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.esm'
import { ValidationObserver } from 'vee-validate'


createApp(App).mount('#app')
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
