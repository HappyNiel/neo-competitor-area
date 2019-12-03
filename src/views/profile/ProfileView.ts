import { Vue, Component } from 'vue-property-decorator';
import { globalStore } from '@/store';
import FirestoreAPI from '@/infrastructure/api/firestore.api';
import authService from '@/infrastructure/services/authentication.service';
import { UserProfile } from '@/infrastructure/models/user-profile';

@Component
export default class ProfileView extends Vue {
    private fireStore: FirestoreAPI = new FirestoreAPI();

    public get userProfile(): UserProfile {
        return globalStore.user.profile;
    }

    public get email(): string {
        return globalStore.user.email;
    }

    public onUpdateProfileClicked(): void {
        const userId = globalStore.user.uid;

        globalStore.user.updateUserProfile(this.userProfile);
        this.fireStore.updateUserProfile(userId, this.userProfile);
    }

    public onResetPasswordClicked(): void {
        authService.resetPassword(this.email);
    }
}
