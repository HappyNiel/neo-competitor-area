import { Entry } from './entry';

export class Season {
    public constructor(
        public id: string,
        public name: string,
        public entries: Entry[],
        public isActive: boolean
    ) {}
}
