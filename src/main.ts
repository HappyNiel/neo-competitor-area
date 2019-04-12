import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase/app";
import "firebase/auth";
import router from "./router";
import store from "./store";
import { firebaseKey } from "./firebase";

Vue.config.productionTip = false;
firebase.initializeApp(firebaseKey);

let app: any = null;

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			store,
			render: (h) => h(App),
		}).$mount("#app");
	}
});

