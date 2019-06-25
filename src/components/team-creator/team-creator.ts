import { Vue, Component } from 'vue-property-decorator';
import { Entry } from '@/infrastructure/interfaces/entry.interface';
import { globalStore } from '@/store';
import FirestoreAPI from '@/infrastructure/api/firestore.api';
import DocumentResponse from '@/infrastructure/classes/document-response.class';

@Component
export default class TeamCreator extends Vue {
    public entryForm: Entry = {};
    public registrationResponse: DocumentResponse = new DocumentResponse(undefined);
    private fireStore: FirestoreAPI = new FirestoreAPI();

    public async onSubmit(): Promise<void> {
        this.entryForm.manager = globalStore.user.uid;
        const result = await this.fireStore.createNewEntry(this.entryForm);
        this.registrationResponse = result;
    }
}
