import { globalStore } from '@/store';
import AuthService from '@/infrastructure/services/authentication.service';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheHeader extends Vue {
    public onLogoutButtonPressed(): void {
        AuthService.logoutUser();
    }

    public displayUserName(): string {
        return `Hello, ${globalStore.user.firstName}`;
    }

    public isUserLoggedIn(): boolean {
        return globalStore.user.isLoggedIn;
    }
}
