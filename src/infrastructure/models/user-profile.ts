export class UserProfile {
    public constructor(
        public firstName: string,
        public lastName: string,
        discordTag?: string
    ) {}
}

export class NullUserProfile extends UserProfile {
    public constructor() {
        super('', '');
    }
}
