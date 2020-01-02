import { Component, Vue } from 'vue-property-decorator';
import EntryCreator from '@/components/entry-creator/entry-creator.vue';

@Component({
    components: {
        EntryCreator
    }
})
export default class DashboardView extends Vue {}
