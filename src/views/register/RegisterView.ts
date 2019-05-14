import Vue from "vue";
import authService from "@/services/authentication.service";
import { Component } from "vue-property-decorator";
import RegisteredUser from "@/interfaces/registered-user.class";


@Component
export default class RegisterView extends Vue {
    public firstName: string = "";
    public lastName: string = "";
    public email: string = "";
    public password: string = "";

    public async onRegistrationClicked(): Promise<void> {
        const registeredUser = new RegisteredUser(this.firstName, this.lastName, this.email);
        await authService.registerNewUser(registeredUser, this.password);
    }


}
