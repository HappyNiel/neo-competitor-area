import { database } from '@/main';
import NewUser from '@/infrastructure/interfaces/new-user.interface';
import EntryForm from "../interfaces/entry-form.class";

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

    public async updateUserProfile(id: string, document: any): Promise<void> {
        return database.collection('users').doc(id).update(document)
            .catch((error) => {
                // The document probably doesn't exist.
                console.error('Error updating document: ', error);
            });
    }

    public createNewEntry(entry: EntryForm): Promise<void> {
        return database.collection('entries').doc().set(entry);
    }
}
