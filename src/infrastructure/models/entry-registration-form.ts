export class EntryRegistrationForm {
    public constructor(
        public manager: string,
        public name: string,
        public entryIdentifier: string,
        public nationality: string,
        public carNumber: number,
        public id?: string,
        public website?: string,
        public twitter?: string
    ) {}

    public convertToObject() {
        return {
            manager: this.manager,
            name: this.name,
            entryIdentifier: this.entryIdentifier,
            nationality: this.nationality,
            carNumber: this.carNumber,
            teamId: this.id || '',
            website: this.website || '',
            twitter: this.twitter || ''
        };
    }
}

export class NullEntryRegistrationForm extends EntryRegistrationForm {
    public constructor() {
        super('', '', '', '' , 0);
    }
}
