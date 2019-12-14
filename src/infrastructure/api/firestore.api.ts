import { database } from '@/main';
import RegisteredUser from '../models/registered-user';
import EventBus from '../event-bus';
import { EntryRegistrationForm } from '../models/entry-registration-form';

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
                EventBus.$emit('UserProfileUpdateSuccess');
            })
            .catch((error) => {
                EventBus.$emit('UserProfileUpdateFailure');

                // TODO: log the error somewhere, if possible? Then I don't have to put the error in the console.
                console.error('Error updating document: ', error);
            });
    }

    public async createNewEntry(entry: EntryRegistrationForm): Promise<void> {
        return database.collection('entries').doc().set(entry.convertToObject())
            .then(() => {
                EventBus.$emit('EntryCreatedSuccess');
            })
            .catch((error) => {
                console.error('Error updating document: ', error);
            });
    }
}
