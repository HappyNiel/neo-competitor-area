import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";
import Login from "./views/login/Login.vue";
import Register from "./views/register/Register.vue";
import firebase from "firebase/app";

Vue.use(Router);

const router = new Router({
	routes: [
		{
			path: "*",
			redirect: "/login"
		},
		{
			path: "/",
			redirect: "/login"
		},
		{
			path: "/login",
			name: "login",
			component: Login,
		},
		{
			path: "/register",
			name: "register",
			component: Register,
		},
		{
			path: "/home",
			name: "home",
			component: Home,
			meta: {
				requiresAuth: true
			}
		},
		// {
		// 	path: "/about",
		// 	name: "about",
		// 	// route level code-splitting
		// 	// this generates a separate chunk (about.[hash].js) for this route
		// 	// which is lazy-loaded when the route is visited.
		// 	component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
		// },
	],
});

router.beforeEach((to, from, next) => {
	const currentUser = firebase.auth().currentUser;
	const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

	if (requiresAuth && !currentUser) {
		next("login");
	}
	else if (!requiresAuth && currentUser) {
		next("home");
	}
	else {
		next();
	}
});

export default router;
