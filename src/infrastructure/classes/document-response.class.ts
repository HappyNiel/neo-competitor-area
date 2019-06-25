export default class DocumentResponse {
    public isSuccess: boolean;
    public error?: any;

    public constructor(
        isSuccess: boolean,
        error?: any
    ) {
        this.isSuccess = isSuccess;
        this.error = error;
    }
}
