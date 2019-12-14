export default class DocumentResponse {

    public constructor(
        public isSuccess: boolean,
        public error?: any
    ) {}
}
