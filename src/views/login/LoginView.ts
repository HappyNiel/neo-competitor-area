import { Component, Vue } from "vue-property-decorator";
import AuthService from "@/core/services/Authentication.service";

@Component
export default class LoginView extends Vue {
    public email: string = "";
    public password: string = "";

    public async onLoginClicked(): Promise<void> {
        await AuthService.loginUser(this.email, this.password);
    }
}
