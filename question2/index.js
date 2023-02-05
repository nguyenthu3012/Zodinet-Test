// Using object-oriented programming to create a Stack class 
// and its methods: find, push, pop, size, and isEmpty.

class Stack {
    constructor() {
        this.items = [];
    }

    find(element) {
        const findIndex = this.items.indexOf(element)
        if (findIndex === -1) return 'Does not exist in the array'
        return findIndex
    }

    // remove last element from the stack
    pop() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }

    // add element to the stack
    add(element) {
        return this.items.push(element);
    }

    // remove element from the stack
    remove() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }

    // check if the stack is empty
    isEmpty() {
        return this.items.length == 0;
    }

    // the size of the stack
    size() {
        return this.items.length;
    }

    // empty the stack
    clear() {
        this.items = [];
    }
}

let stack = new Stack();
stack.add(2);
stack.add(5);
stack.add(0);
stack.add(7);
console.log('>>>> Stack: ', stack.items);

const findElement6 = stack.find(6)
const findElement5 = stack.find(5)

console.log('>>>> Element 6 is in index of: ', findElement6)
console.log('>>>> Element 5 is in index of: ', findElement5)

console.log('>>>> Last element is removed from stack: ', stack.pop())

console.log('>>>> Stack is empty ?', stack.isEmpty());

console.log('>>>>> Stack size: ', stack.size(), '>>>> Stack: ', stack.items);

stack.clear();
console.log(stack.items);