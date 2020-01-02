import Vue from 'vue';
import App from './App.vue';
import { store, globalStore } from '@/store';
import router from './router';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseKey } from '@/firebase';
import { firestorePlugin } from 'vuefire';
import BootstrapVue from 'bootstrap-vue';

Vue.config.productionTip = false;
Vue.use(firestorePlugin);
Vue.use(BootstrapVue);

firebase.initializeApp(firebaseKey);
export const database = firebase.firestore();

let app: any = null;
const initializeApp = () => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: (h) => h(App),
        }).$mount('#app');
    }
};

firebase.auth().onAuthStateChanged(() => {
    // Update the user in the store whenever the Auth state changes.
    globalStore.user.fetchAllUserInfo();
    initializeApp();
});
