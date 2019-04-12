import Vue from "vue";
import {Component} from "vue-property-decorator";
import firebase from "firebase/app";

@Component({})
export default class Register extends Vue {
	public email: string = "";
	public password: string = "";

	public onRegistrationClicked(): void {
		console.log(`${this.email} and ${this.password}`);

		firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
			.then((user) => {
				this.$router.replace("home");
			},
			(error) => {
				alert(error.message);
			});
	}
}
