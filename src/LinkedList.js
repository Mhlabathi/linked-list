import { Node } from "./Node.js";

class LinkedList {
    index;
    listSize;
    listHead;
    listTail;
    items;
    constructor(){
        this.listHead = null;
        this.listTail = null;
        this.listSize = 0;
        this.index = 0;
        this.items = {};
    }

    append(value) {
        const newValue = new Node(value);
        if( this.listHead === null) {
            this.listHead = newValue;
            this.listTail = newValue;
            newValue.index = 0;
        } else {
            newValue.index = this.index + 1;
            this.listTail.next = newValue;
            this.listTail = newValue;
            this.index++;
        }
        this.listSize++;
    }

    prepend( value ) {
        const newValue = new Node( value );
        if( this.listHead === null) {
            this.listHead = newValue;
            this.listTail = newValue;
            newValue.index = 0;
        } else {
            let hold = this.listHead;
            newValue.index = 0;
            this.listHead = newValue;
            newValue.next = hold;

            while ( hold !== null ) {
                hold.index = hold.index + 1;
                hold = hold.next;
            }
            this.index++;
        }
        this.listSize++;

    }

    size() {
        return this.listSize;
    }

    head(){
        return this.listHead;
    }

    tail() {
        return this.listTail;
    }

    at( index ) {
        if ( index >= this.listSize ) return `Error: Index out of bound`;
        let hold = this.listHead;
        while ( hold !== null ) {
            if ( hold.index === index ) return hold;
            hold = hold.next;
        }
    }

    pop() {
        this.listSize = this.listSize - 1;
        this.listTail = this.at(this.listSize - 1 );
        this.listTail.next = null;
        this.index = this.index - 1
    }

    contains( value ) {
        let hold = this.listHead;
        while ( hold !== null ) {
            if ( hold.value === value ) return true;
            hold = hold.next;
        }
        return false;
    }

    find( value ) {
        let hold = this.listHead;
        while ( hold !== null ) {
            if ( hold.value === value ) return hold.index;
            hold = hold.next;
        }
        return null;
    }

    insertAt( value, index ) {
        if ( index === 0 ) {
            this.prepend( value );
        } else if ( index === this.index ) {
            this.append( value );
        } else {
            const toMove = this.at( index );
            const newValue = new Node( value );
            newValue.index = index;
            newValue.next = toMove;
            console.log(newValue);

            //update subsequent indeces
            let hold = newValue.next;
            while ( hold !== null ) {
                hold.index = index + 1;
                hold = hold.next;
            }
            this.index++;
        }
        this.listSize++;
    }

    toString() {
        let listString = '';
        let hold = this.listHead;
        while ( hold !== null ) {
            console.log(hold.value);
            listString += ' ( '+ hold.value + ' ) ->';
            hold = hold.next;
        }
        return listString;
    }

}

export { LinkedList };