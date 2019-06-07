import { VuexModule, mutation, action, getter, Module } from 'vuex-class-component';
import { User } from 'firebase/app';
import authService from '@/infrastructure/services/authentication.service';
import FirestoreService from '@/infrastructure/services/firestore.service';

const fireStoreService = new FirestoreService();

@Module()
export class UserStore extends VuexModule {
    private authUser: User = null;
    private userProfile: any = {};

    public get isLoggedIn(): boolean {
        return this.authUser !== null ? true : false;
    }

    public get firstName(): string {
        return this.userProfile ? this.userProfile.firstName : 'n/a';
    }

    public get lastName(): string {
        return this.userProfile ? this.userProfile.lastName : 'n/a';
    }

    public get uid(): string {
        return this.authUser !== null ? this.authUser.uid : '';
    }

    public get email(): string {
        return this.authUser !== null ? this.authUser.email : '';
    }

    public get profile(): any {
        return this.userProfile;
    }

    @mutation
    public updateCurrentUser(user: User): void {
        this.authUser = user;
    }

    @mutation
    public updateUserProfile(profile: any): void {
        this.userProfile = profile;
    }

    @mutation
    public clearUserProfile(): void {
        this.userProfile = {};
    }

    // Fetch both the auth state of the user and the Firestore document.
    @action
    public async fetchAllUserInfo(): Promise<void> {
        const user = await this.fetchUserStatus();
        this.updateCurrentUser(user);

        if (user) {
            const userDocument = await this.fetchUserDocument(user.uid);
            this.updateUserProfile(userDocument);
        }
        else {
            if (this.userProfile) {
                this.clearUserProfile();
            }
        }
    }

    // Fetch the current auth state of the user.
    @action
    private async fetchUserStatus(): Promise<User> {
        return await authService.getCurrentUser();
    }

    // Fetch the document of the user containing additional information.
    @action
    private async fetchUserDocument(id: string): Promise<any> {
        return await fireStoreService.retrieveUser(id);
    }
}

export const userStore = UserStore.ExtractVuexModule(UserStore);
