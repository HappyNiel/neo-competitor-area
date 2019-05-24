import firebase, { User } from 'firebase/app';
import router from '@/router';
import { getModule } from 'vuex-module-decorators';
import UserModule from '@/store/modules/User.module';
import FirestoreService from './firestore.service';
import NewUser from '@/infrastructure/interfaces/new-user.interface';


const userState = getModule(UserModule);

class AuthService {
    private firestoreService: FirestoreService;

    public constructor() {
        this.firestoreService = new FirestoreService();
    }
    // TODO: Unit test this file

    // Register user
    public async registerNewUser(teamManager: NewUser, password: string): Promise<void> {
        return firebase.auth().createUserWithEmailAndPassword(teamManager.email, password)
            .then((userCredential: firebase.auth.UserCredential) => {
                const userId = userCredential.user.uid;
                this.firestoreService.createNewUser(userId, teamManager);

                return router.replace('dashboard');
            },
            (error) => {
                // TODO: replace this with proper error handling
                return alert(error.message);
            });
    }

    // Login
    public async loginUser(email: string, password: string): Promise<void> {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.firestoreService.retrieveUser(user.user.uid);
                return router.replace('dashboard');
            },
            (error) => {
                // TODO: replace this with proper error handling
                return alert(error.message);
            });
    }

    // Logout
    public async logoutUser(): Promise<void> {
        return firebase.auth().signOut().then(() => {
            router.replace('login');
        });
    }

    // Reset password
    public async resetPassword(email: string): Promise<void> {
        return firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                // TODO: replace this with proper user flow.
                alert('A password reset link has been sent to your email address.');
            },
            (error) => {
                // TODO: replace this with proper error handling
                return alert(error.message);
            });
    }

    public getCurrentUser(): User | null {
        return firebase.auth().currentUser;
    }
}
const authService = new AuthService();
export default authService;
