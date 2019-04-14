import Vue from "vue";
import { authService } from "@/core/services/Authentication.service";
import { Component } from "vue-property-decorator";

@Component
export default class Register extends Vue {
	public email: string = "";
	public password: string = "";

	// public constructor(private authService: AuthService) {
	// 	super();
	// }

	public async onRegistrationClicked(): Promise<void> {
		await authService.registerNewUser(this.email, this.password);
	}
}
