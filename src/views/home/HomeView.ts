import { Component, Vue } from "vue-property-decorator";
import store from "@/core/store";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import AuthService from "@/core/services/Authentication.service";
import { User } from "firebase";

@Component({
	components: {
		HelloWorld
	}
})
export default class HomeView extends Vue {
	private currentUser: User | null = null;

	public async onLogoutPressed(): Promise<void> {
		await AuthService.logoutUser();
	}

	public beforeMount(): void {
		this.currentUser = store.state.currentUser;
	}

	public mounted() {
		console.log(store.state.currentUser);
		// if (this.currentUser !== null) {
		// 	console.log(this.currentUser.email);
		// }
	}
}
