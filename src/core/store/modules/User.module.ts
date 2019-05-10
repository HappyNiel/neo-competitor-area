import store from "@/core/store";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { User } from "firebase";
import AuthService from "@/core/services/authentication.service";

@Module({
    dynamic: true,
    store,
    name: "user"
    // namespaced: true,
})
export default class UserModule extends VuexModule {
    private currentUser: User | null = null;

    public get isLoggedIn(): boolean {
        if (this.currentUser !== null) {
            return true;
        }
        else {
            return false;
        }
    }

    public get email(): string {
        if (this.currentUser !== null) {
            return this.currentUser.email as string;
        }

        return "not logged in person.";
    }

    @Mutation
    public setCurrentUser(user: User | null) {
        this.currentUser = user;
    }

    @Action({ commit: "setCurrentUser" })
    public async updateCurrentUserStatus(): Promise<User | null> {
        return await AuthService.getCurrentUser();
    }
}
