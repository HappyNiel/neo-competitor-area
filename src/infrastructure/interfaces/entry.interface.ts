export interface EntryForm {
    name?: string;
    nationality?: string;
    carNumber?: number;
    entryIdentifier?: string;
    website?: string;
    twitter?: string;
}

export interface Entry extends EntryForm {
    manager?: string;
    id?: string;
}
