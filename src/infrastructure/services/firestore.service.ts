import NewUser from '@/infrastructure/models/new-user.interface';
import FirestoreAPI from '../api/firestore.api';

export default class FirestoreService {

    private firestore = new FirestoreAPI();

    public createNewUser(id: string, teamManager: NewUser): Promise<void> {
        return this.firestore.createNewUser(id, teamManager);
    }

    public async retrieveUser(id: string) {
        // retrieve the user from Firestore
        return await this.firestore.getUser(id);
    }
}
