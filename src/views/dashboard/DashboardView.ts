import { Component, Vue } from 'vue-property-decorator';
import TeamOverview from '@/components/team-overview/team-overview';

@Component({
    components: {
        TeamOverview
    }
})
export default class DashboardView extends Vue {}
