import { Vue, Component } from 'vue-property-decorator';
import { globalStore } from '@/store';
import FirestoreAPI from '@/infrastructure/api/firestore.api';
import { EntryRegistrationForm, NullEntryRegistrationForm } from '@/infrastructure/models/entry-registration-form';

@Component
export default class EntryCreator extends Vue {
    public entryForm: EntryRegistrationForm = new NullEntryRegistrationForm();
    private fireStore: FirestoreAPI = new FirestoreAPI();

    public async onSubmit(): Promise<void> {
        this.entryForm.manager = globalStore.user.uid;
        await this.fireStore.createNewEntry(this.entryForm);
    }
}
