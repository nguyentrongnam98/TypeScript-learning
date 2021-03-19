import {HasFormatter} from '../interface/hasFormatter.js'
export class Payment implements HasFormatter{
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(readonly success:string , private details: string, public amount: number){
        this.success = success;
        this.details = details;
        this.amount = amount;
    }
    format(){
        return `${this.success} owes $${this.amount} for ${this.details}`
    }
}