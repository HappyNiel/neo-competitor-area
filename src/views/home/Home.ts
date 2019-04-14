import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { authService } from "@/core/services/Authentication.service";

@Component({
	components: {
		HelloWorld
	}
})
export default class Home extends Vue {

	public async onLogoutPressed(): Promise<void> {
		await authService.logoutUser();
	}
}
