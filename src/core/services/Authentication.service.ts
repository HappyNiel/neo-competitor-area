import firebase from "firebase/app";
import router from "@/router";

export class AuthService {

	// Register user
	public registerNewUser(email: string, password: string) {
		return firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((user) => {
				return router.replace("home");
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
				return router.replace("home");
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

	// Set userdata to Firestore after successful login/registration
}

export default new AuthService();
