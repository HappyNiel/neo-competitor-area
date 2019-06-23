import { Vue, Component } from 'vue-property-decorator';
import { Entry } from '@/infrastructure/models/entry.interface';
import { globalStore } from '@/store';
import FirestoreAPI from '@/infrastructure/api/firestore.api';

@Component
export default class TeamCreator extends Vue {
    public entryForm: Entry = {};
    private fireStore: FirestoreAPI = new FirestoreAPI();

    public onSubmit(): void {
        this.entryForm.manager = globalStore.user.uid;
        this.fireStore.createNewEntry(this.entryForm);
    }
}
