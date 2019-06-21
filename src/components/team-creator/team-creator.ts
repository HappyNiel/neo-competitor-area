import { Vue, Component } from 'vue-property-decorator';
import EntryForm from '@/infrastructure/interfaces/entry-form.class';
import { globalStore } from "@/store";

@Component
export default class TeamCreator extends Vue {
    public entryForm: EntryForm = {};
    private teamManager: string = globalStore.user.uid;
    private teamManagerProfile: any = globalStore.user.profile;

    public onSubmit(): void {
        console.log(this.entryForm);
    }
}
