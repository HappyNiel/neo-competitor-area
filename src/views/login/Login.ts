import { Component, Vue } from "vue-property-decorator";
import { authService } from "@/core/services/Authentication.service";

@Component
export default class Login extends Vue {
	public email: string = "";
	public password: string = "";

	public async onLoginClicked(): Promise<void> {
		await authService.loginUser(this.email, this.password);
	}
}
