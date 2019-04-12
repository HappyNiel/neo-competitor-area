
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import firebase from "firebase/app";

@Component({
	components: {
		HelloWorld
	}
})
export default class Home extends Vue {
	public onLogoutPressed(): void {
		firebase.auth().signOut().then(() => {
			this.$router.replace("login");
		});
	}
}
