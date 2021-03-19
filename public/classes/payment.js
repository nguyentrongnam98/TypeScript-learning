export class Payment {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(success, details, amount) {
        this.success = success;
        this.details = details;
        this.amount = amount;
        this.success = success;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.success} owes $${this.amount} for ${this.details}`;
    }
}
