import firebase, { User } from "firebase/app";
import router from "@/router";

export class AuthService {
	// TODO: Unit test this file

	// Register user
	public registerNewUser(email: string, password: string) {
		return firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((user) => {
				return router.replace("dashboard");
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
				return router.replace("dashboard");
			},
			(error) => {
				// TODO: replace this with proper error handling
				return alert(error.message);
			});
	}

	// Logout
	public async logoutUser(): Promise<void> {
		return firebase.auth().signOut().then(() => {
			router.replace("login");
		});
	}

	// Reset password
	public resetPassword(email: string): Promise<void> {
		return firebase.auth().sendPasswordResetEmail(email)
			.then(() => {
				// TODO: replace this with proper user flow.
				alert("A password reset link has been sent to your email address.");
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

export default new AuthService();
