import { Component, Vue } from 'vue-property-decorator';
import TeamCreator from '@/components/team-creator/team-creator';

@Component({
    components: {
        TeamCreator
    }
})
export default class DashboardView extends Vue {}
