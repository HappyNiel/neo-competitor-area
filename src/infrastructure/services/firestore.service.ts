import NewUser from '@/infrastructure/interfaces/new-user.interface';
import FirestoreAPI from '../api/firestore.api';
import UserModule from '@/store/modules/User.module';
import { getModule } from 'vuex-module-decorators';

const userState = getModule(UserModule);

export default class FirestoreService {
    private firestore = new FirestoreAPI();

    public createNewUser(id: string, teamManager: NewUser): Promise<void> {
        return this.firestore.createNewUser(id, teamManager);
    }

    public async retrieveUser(id: string) {
        // retrieve the user from Firestore
        const user = await this.firestore.getUser(id);

        // save it in the store
        userState.setUserInfo(user);
    }
}
