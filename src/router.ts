import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";
import PageNotFound from "./views/errors/PageNotFound.vue";
import NoAccess from "./views/errors/PageNoAccess.vue";
import Login from "./views/login/Login.vue";
import Register from "./views/register/Register.vue";
import firebase from "firebase/app";

Vue.use(Router);

const router = new Router({
	routes: [
		{
			path: "*",
			redirect: "/page-not-found"
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
		{
			path: "/page-not-found",
			name: "pagenotfound",
			component: PageNotFound,
		},
		{
			path: "/no-access",
			name: "noaccess",
			component: NoAccess,
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

	// If the page requires autherntication, but user is not logged in.
	if (requiresAuth && !currentUser) {
		next("no-access");
	}

	// If the user is logged in, send him to home
	// else if (!requiresAuth && currentUser) {
	// 	next("home");
	// }

	else {
		next();
	}
});

export default router;
