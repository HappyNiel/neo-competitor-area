import {database} from "@/main";

export default class FirestoreService {

    public createNewUser(id: string): Promise<void> {
        return database.collection("users").doc(id).set({
            firstName: "Niel",
            lastName: "Hekkens"
        });
    }
}
