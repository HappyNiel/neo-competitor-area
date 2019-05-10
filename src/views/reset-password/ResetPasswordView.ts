import Vue from "vue";
import AuthService from "@/core/services/authentication.service";
import { Component } from "vue-property-decorator";

@Component
export default class ResetPasswordView extends Vue {
    public email: string = "";

    public async onResetPasswordClicked(): Promise<void> {
        await AuthService.resetPassword(this.email);
    }
}
