import { Vue, Component } from 'vue-property-decorator';
import { globalStore } from '@/store';
import { UserProfile } from '@/infrastructure/interfaces/user-profile.interface';
import FirestoreAPI from '@/infrastructure/api/firestore.api';

@Component
export default class ProfileView extends Vue {
    public userProfile: UserProfile = {firstName: 'this', lastName: 'name'};
    public email: string = 'email@address.com';
    private fireStore: FirestoreAPI = new FirestoreAPI();

    public mounted() {
        this.fillUserInfo();
    }

    // TODO: Figure out why the data is not loading on initial page load.
    // Probably something with the async loading of the data and the component
    // is not updated when the data is updated for the first time.

    public onUpdateProfileClicked(): void {
        const userId = globalStore.user.uid;

        globalStore.user.updateUserProfile(this.userProfile);
        this.fireStore.updateUserProfile(userId, this.userProfile);
    }

    private fillUserInfo(): void {
        this.getEmailAddress();
        this.getUserProfile();
    }

    private getEmailAddress(): void {
        this.email = globalStore.user.email;
    }

    private getUserProfile(): void {
        this.userProfile = globalStore.user.profile;
    }
}
