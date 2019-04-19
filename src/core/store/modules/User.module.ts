import store from "@/core/store";
import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import { User } from "firebase";

@Module({
	dynamic: true,
	store,
	name: "user"
	
})
export default class UserModule extends VuexModule {
	public currentUser: User | null = null;

	@Mutation
	public setCurrentUser(user: User | null) {
		this.currentUser = user;
	}
}