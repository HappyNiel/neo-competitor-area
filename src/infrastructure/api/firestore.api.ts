import { database } from '@/main';
import NewUser from '@/infrastructure/interfaces/new-user.interface';

export default class FirestoreAPI {

    public createNewUser(id: string, teamManager: NewUser): Promise<void> {
        return database.collection('users').doc(id).set({
            firstName: teamManager.firstName,
            lastName: teamManager.lastName
        });
    }

    public async getUser(id: string) {
        return database.collection('users').doc(id).get().then((snapshot) => {
            return snapshot.data();
        });
    }
}
