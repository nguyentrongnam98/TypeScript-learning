import { Invoice } from './classes/invoice.js';
import { ListItem } from './classes/listItem.js';
import { Payment } from './classes/payment.js';
let docOne;
let docTwo;
docOne = new Invoice('yossi', 'web work', 250);
docTwo = new Payment('1', 'Hello', 100);
let docs = [];
docs.push(docOne, docTwo);
console.log(docs);
const me = {
    name: 'nam',
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
const proplayer = {
    name: 'nam1212',
    age: 10,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    }
};
greetPerson(proplayer);
const invOne = new Invoice('mario', 'Say hello', 200);
const invTwo = new Invoice('nam', 'Say goobye', 250);
let invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
const ul = document.querySelector('ul');
const list = new ListItem(ul);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'start');
});
var trave = function (x, y) {
    return x + y;
};
var test = function (name, age) {
    return `${name} -- ${age}`;
};
var arrow = (a, b) => {
    return `${a} -- ${b}`;
};
class Ashe {
    constructor(name, skill, mana, mau) {
        this.name = name;
        this.skill = skill;
        this.mana = mana;
        this.mau = mau;
    }
    ultimate(R) {
        console.log(`Chieu cuoi la ${R}`);
    }
}
const newAshe = new Ashe('Ashe', ['one', 'two', 'three'], 100, 100);
console.log(newAshe);
newAshe.ultimate('dcm');
