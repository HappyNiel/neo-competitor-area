import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseKey } from "./firebase";
import { getModule } from "vuex-module-decorators";
import UserModule from "./store/modules/User.module";

Vue.config.productionTip = false;
firebase.initializeApp(firebaseKey);
const userModule = getModule(UserModule);

let app: any = null;
const initializeApp = () => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: (h) => h(App),
        }).$mount("#app");
    }
};

firebase.auth().onAuthStateChanged(() => {
    // Update the user in the store whenever the Auth state changes.
    userModule.updateCurrentUserStatus();

    initializeApp();
});

