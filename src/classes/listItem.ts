import {HasFormatter} from '../interface/hasFormatter.js'
export class ListItem {
    constructor(private container:HTMLUListElement){
        this.container = container 
    }
    render(item:HasFormatter, heading: string, pos:'start'|'end'){
        const li = document.createElement('li')
        const h1 = document.createElement('h1')
        h1.innerText = heading
        li.append(h1)
        const p = document.createElement('p')
        p.innerText = item.format()
        li.append(p)
        if(pos == 'start'){
            this.container.prepend(li)
        }else {
            this.container.append(li)
        }
    }
}