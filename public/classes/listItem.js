export class ListItem {
    constructor(container) {
        this.container = container;
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        h1.innerText = heading;
        li.append(h1);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos == 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
