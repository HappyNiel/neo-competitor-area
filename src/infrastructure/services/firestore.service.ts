import FirestoreAPI from '../api/firestore.api';
import RegisteredUser from '../models/registered-user';

export default class FirestoreService {

    private firestore = new FirestoreAPI();

    public createNewUser(id: string, teamManager: RegisteredUser): Promise<void> {
        return this.firestore.createNewUser(id, teamManager);
    }

    public async retrieveUser(id: string) {
        // retrieve the user from Firestore
        return await this.firestore.getUser(id);
    }
}
