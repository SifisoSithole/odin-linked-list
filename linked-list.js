class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    listHead = null;

    append(value) {
        const newNode = new Node(value);
        if (this.listHead === null){
            this.listHead = newNode;
            return;
        }

        let currentNode = this.listHead;
        while (currentNode.nextNode){
            currentNode = currentNode.nextNode;
        }
        
        currentNode.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.listHead;
        this.listHead = newNode;
    }

    size() {
        let i = 0;
        let currentNode = this.listHead;
        while (currentNode){
            i++;
            currentNode = currentNode.nextNode;
        }
        return i;
    }

    head() {
        return this.listHead;
    }

    tail() {
        let currentNode = this.listHead;
        while (currentNode.nextNode){
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index) {
        let i = 0;
        let currentNode = this.listHead;
        
        while(currentNode){
            if (i === index) {
                return currentNode;
            }
            i++;
            currentNode = currentNode.nextNode;
        }

        return null;
    }

    pop() {
        let currentNode = this.listHead;
        let prev;

        if (!this.listHead) return;

        if (!currentNode.newNode){
            this.listHead = null;
            return;
        }

        while (currentNode.nextNode){
            prev = currentNode;
            currentNode = currentNode.nextNode;
        }

        prev.nextNode = null;
    }


    contains(value) {
        let currentNode = this.listHead;

        while(currentNode){
            if (currentNode.value === value){
                return true;
            }
            currentNode = currentNode.nextNode;
        }

        return false;
    }

    find(value) {
        let currentNode = this.listHead;
        let i = 0;

        while(currentNode){
            if (currentNode.value === value){
                return i;
            }
            i++;
            currentNode = currentNode.nextNode;
        }

        return null;
    }

    toString() {
        let currentNode = this.listHead
        let string = '';

        while (currentNode){
            string += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }

        string += 'null';

        return string;
    }

}