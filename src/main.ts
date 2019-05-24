import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { getModule } from 'vuex-module-decorators';
import UserModule from '@/store/modules/User.module';
import router from './router';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseKey } from './firebase';
import { firestorePlugin } from 'vuefire';
import FirestoreService from './infrastructure/services/firestore.service';

Vue.config.productionTip = false;
Vue.use(firestorePlugin);

firebase.initializeApp(firebaseKey);
export const database = firebase.firestore();
// userState is the user module in the store.
const userState = getModule(UserModule);

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
    userState.updateCurrentUserStatus();

    // const firestoreService = new FirestoreService();
    // setTimeout(() => {
    //     firestoreService.retrieveUser(userState.uid);
    // }, 2000);

    initializeApp();
    // database.collection('testing')
    //     .doc('o9w3dc8MIwUiDnrXmxPL')
    //     .get()
    //     .then(snapshot => {
    //         const document = snapshot.data()
    //         console.log(document);
    //     }
    // );
});
