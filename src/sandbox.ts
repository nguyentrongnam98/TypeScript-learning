import {Invoice} from './classes/invoice.js'
import { ListItem } from './classes/listItem.js';
import { Payment } from './classes/payment.js';
import {HasFormatter} from './interface/hasFormatter.js'
let docOne: HasFormatter;
let docTwo: HasFormatter;
docOne =  new Invoice('yossi','web work',250)
docTwo = new Payment('1','Hello',100)
let docs: HasFormatter[] = []
docs.push(docOne,docTwo)
console.log(docs);

interface Isperson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}
const me: Isperson = {
  name:'nam',
  age:20,
  speak(text: string): void {
      console.log(text);
  },
  spend(amount:number): number {
      console.log(amount);
      return amount;
  }
}
const greetPerson = (person: Isperson) => {
    console.log('hello',person.name);
    
}
const proplayer = {
    name:'nam1212',
    age:10,
    speak(text:string):void {
        console.log(text);
    },
    spend(amount:number):number {
        return amount
    }
}
greetPerson(proplayer)
const invOne = new Invoice('mario','Say hello',200)
const invTwo = new Invoice('nam','Say goobye',250)
let invoices: any[] = []
invoices.push(invOne,invTwo)
invoices.forEach(inv => {
    console.log(inv.client , inv.details, inv.amount , inv.format());
})


const form = document.querySelector('.new-item-form') as HTMLFormElement;
const ul = document.querySelector('ul')!
const list = new ListItem(ul)
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
form.addEventListener('submit',(e:Event)=>{
     e.preventDefault()
     let doc:HasFormatter;
     if(type.value == 'invoice'){
         doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber)
     }else {
         doc = new Payment(tofrom.value,details.value,amount.valueAsNumber)
     }
    list.render(doc,type.value,'start')
 })

var trave = function(x:number,y:number) : number {
    return x + y
}
var test: (name:string , age:number) => string = function(name,age){
    return `${name} -- ${age}`
}
var arrow = (a:string , b:string) :string => {
    return `${a} -- ${b}`
}
// console.log(trave(1,2));
// console.log(test('Nam',23))
// console.log(arrow('NGuyen','Nam'));

interface hero {
    name:string;
    skill:string[];
    mana:number;
    mau:number;
    ultimate(x:string):void;
}

class Ashe implements hero {
    name:string;
    skill:string[];
    mana:number;
    mau:number;
    constructor(name:string, skill:string[], mana:number, mau:number){
        this.name = name;
        this.skill = skill;
        this.mana = mana;
        this.mau = mau;
    }
    ultimate<T>(R:T):void{
        console.log(`Chieu cuoi la ${R}`);
        
    }
}

const newAshe = new Ashe('Ashe',['one','two','three'],100,100)
console.log(newAshe);

newAshe.ultimate<string>('dcm')



























