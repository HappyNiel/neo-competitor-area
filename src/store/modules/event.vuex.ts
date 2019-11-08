import { mutation, createModule } from 'vuex-class-component';

const VuexModule = createModule({
    namespaced: true,
    strict: false
});

export class EventStore extends VuexModule {
    public isSuccess: boolean = false;

    @mutation public displaySuccessAlert(): void {
        this.isSuccess = true;
    }

    @mutation public hideSuccessAlert(): void {
        this.isSuccess = false;
    }
}
