import { database } from '@/main';
import { globalStore } from '@/store';
import RegisteredUser from "../models/registered-user";

export default class FirestoreAPI {

    public createNewUser(id: string, teamManager: RegisteredUser): Promise<void> {
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
            .then(() => {
                globalStore.eventBus.displaySuccessAlert();
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error('Error updating document: ', error);
            });
    }
}
