import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase/app";
import "firebase/auth";
import router from "./router";
import store from "./store";
import { firebaseKey } from "./firebase";
import AuthService from "./core/services/Authentication.service";

Vue.config.productionTip = false;
firebase.initializeApp(firebaseKey);

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
	// Set the state of the user on load
	store.commit("setCurrentUser", AuthService.getCurrentUser());

	initializeApp();
});

