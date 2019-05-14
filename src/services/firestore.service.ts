import {database} from "@/main";
import NewUser from "@/interfaces/new-user.interface";

export default class FirestoreService {

    public createNewUser(id: string, teamManager: NewUser): Promise<void> {
        return database.collection("users").doc(id).set({
            firstName: teamManager.firstName,
            lastName: teamManager.lastName
        });
    }
}
