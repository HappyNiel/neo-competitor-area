import Vue from "vue";
import Router from "vue-router";
import NotFoundView from "./views/errors/NotFoundView.vue";
import NoAccessView from "./views/errors/NoAccessView.vue";
import LoginView from "./views/login/LoginView.vue";
import firebase from "firebase/app";
import RegisterView from "./views/register/RegisterView";
import HomeView from "./views/home/HomeView";

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
			component: LoginView,
		},
		{
			path: "/register",
			name: "register",
			component: RegisterView,
		},
		{
			path: "/home",
			name: "home",
			component: HomeView,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: "/page-not-found",
			name: "pagenotfound",
			component: NotFoundView,
		},
		{
			path: "/no-access",
			name: "noaccess",
			component: NoAccessView,
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
