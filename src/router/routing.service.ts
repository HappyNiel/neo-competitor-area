
import router from '@/router';

export default class RoutingService {
    public redirectToNotAuthorized(): void {
        router.push('no-access');
    }

    public redirectToPageNotFound(): void {
        router.push('page-not-found');
    }

    public redirectToLoginPage(): void {
        router.push('login');
    }

    public redirectToRegistrationPage(): void {
        router.push('register');
    }

    public redirectToDashboard(): void {
        router.push('dashboard');
    }

    public redirectToResetPassword(): void {
        router.push('reset-password');
    }
}
