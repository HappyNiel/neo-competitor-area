import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import AuthService from '@/infrastructure/services/authentication.service';
import { User } from 'firebase/app';

@Component({
    components: {
        HelloWorld
    }
})
export default class DashboardView extends Vue {
    private currentUser: User | null = null;

    public async onLogoutPressed(): Promise<void> {
        await AuthService.logoutUser();
    }
}
