import store from '@/store';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { User } from 'firebase/app';
import AuthService from '@/infrastructure/services/authentication.service';
import FirestoreService from '@/infrastructure/services/firestore.service';

@Module({
    dynamic: true,
    store,
    name: 'user'
    // namespaced: true,
})
export default class UserModule extends VuexModule {
    private currentUser: User | null = null;
    private userInfo: any = undefined;

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

        return 'not logged in person.';
    }

    public get uid(): string {
        if (this.currentUser !== null) {
            return this.currentUser.uid as string;
        }

        return '';
    }

    public get firstName(): string {
        if(this.userInfo){
            return this.userInfo.firstName;
        }
        else {
            return 'n/a';
        }
    }

    @Mutation
    public setCurrentUser(user: User | null) {
        this.currentUser = user;
    }

    @Mutation
    public setUserInfo(document: any) {
        this.userInfo = document;
    }

    @Action({ commit: 'setCurrentUser' })
    public async updateCurrentUserStatus(): Promise<User | null> {
        return await AuthService.getCurrentUser();
    }

    // @Action({ commit: 'setUserInfo' })
    // public async updateUserInfo() {
    //     const firestoreService = new FirestoreService();
    //     return await firestoreService.retrieveUser(this.currentUser.uid);
    // }
}
