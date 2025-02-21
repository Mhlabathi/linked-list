import { Node } from "./Node.js";

class LinkedList {
    index;
    listSize;
    listHead;
    listTail;
    constructor(){
        this.listHead = null;
        this.listTail = null;
        this.listSize = 0;
        this.index = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if( this.listHead === null) {
            this.listHead = newNode;
            this.listTail = newNode;
            newNode.index = 0;
        } else {
            newNode.index = this.index + 1;
            this.listTail.next = newNode;
            this.listTail = newNode;
            this.index++;
        }
        this.listSize++;
    }

    prepend( value ) {
        const newNode = new Node( value );
        if( this.listHead === null) {
            this.listHead = newNode;
            this.listTail = newNode;
            newNode.index = 0;
        } else {
            let hold = this.listHead;
            newNode.index = 0;
            this.listHead = newNode;
            newNode.next = hold;

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
        this.listTail = this.at( this.index - 1 );
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
             console.log("inseted index prep");
            this.prepend( value );
        } else if ( index === this.index ) {
            console.log("inseted index app");

            const next = this.at( index );
            const previous = this.at( index - 1 );
            const newNode = new Node( value );
            newNode.index = index;
            newNode.next = next;
            previous.next = newNode;
            next.index = index + 1;

            this.index++;
            this.listSize++;

        } else {
            const toMove = this.at( index );
            const previous = this.at( index - 1 );
            const newNode = new Node( value );
            newNode.index = index;
            console.log("inseted index" + newNode.index + " " + newNode.value);
            newNode.next = toMove;
            previous.next = newNode;

            //update subsequent indeces
            let hold = toMove;
            while ( hold !== null ) {
                hold.index = hold.index + 1;
                hold = hold.next;
            }
            this.index++;
            this.listSize++;
        }
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