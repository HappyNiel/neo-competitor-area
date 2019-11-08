import { Driver } from './driver';

export class Entry {
    public constructor(
        public id: string,
        public carNumber: number,
        public category: string,
        public car: string,
        public driverRoster: Driver[]
    ) {}
}
