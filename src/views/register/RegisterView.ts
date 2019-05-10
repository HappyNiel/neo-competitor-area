import Vue from "vue";
import AuthService from "@/services/authentication.service";
import { Component } from "vue-property-decorator";

@Component
export default class RegisterView extends Vue {
    public email: string = "";
    public password: string = "";

    public async onRegistrationClicked(): Promise<void> {
        await AuthService.registerNewUser(this.email, this.password);
    }
}
