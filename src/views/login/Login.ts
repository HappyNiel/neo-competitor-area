import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase/app";

@Component({})
export default class Login extends Vue {
	public email: string = "";
	public password: string = "";

	public onLoginClicked(): void {
		firebase.auth().signInWithEmailAndPassword(this.email, this.password)
			.then((user) => {
				this.$router.replace("home");
			},
			(error) => {
				alert(error.message);
			});
	}
}
