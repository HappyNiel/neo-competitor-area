import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheFooter extends Vue {
    public currentYear: string;

    public constructor() {
        super();
        this.currentYear = '2019';
    }

    public mounted(): void {
        this.getCurrentYear();
    }

    private getCurrentYear(): void {
        const currentDate = new Date();
        const year = currentDate.getFullYear();

        this.currentYear = year.toString();
    }
}
