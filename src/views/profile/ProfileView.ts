import { Vue, Component } from 'vue-property-decorator';
import { globalStore } from '@/store';
import { UserProfile } from '@/infrastructure/interfaces/user-profile.interface';

@Component
export default class ProfileView extends Vue {
    public userProfile: UserProfile = {firstName: 'this', lastName: 'name'};
    public email: string = 'email@address.com';
    public discordTag: string = '';

    public mounted() {
        this.fillUserInfo();
    }

    // TODO: Figure out why the data is not loading on initial page load.
    // Probably something with the async loading of the data and the component
    // is not updated when the data is updated for the first time.

    private fillUserInfo(): void {
        this.getEmailAddress();
        this.getFirstName();
        this.getLastName();
    }

    private getEmailAddress(): void {
        this.email = globalStore.user.email;
    }

    // private getUserProfile(): void {
    //     this.userProfile = globalStore.user.profile;
    // }

    private getFirstName(): void {
        this.userProfile.firstName = globalStore.user.firstName;
    }

    private getLastName(): void {
        this.userProfile.lastName = globalStore.user.lastName;
    }
}
