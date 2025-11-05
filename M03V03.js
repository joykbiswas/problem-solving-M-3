class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.pop();

    }

    peek() {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items.slice().reverse().join(" -> "));
    }
}

const stack = new Stack();
 console.log(stack.peek());
 console.log(stack.isEmpty);

 stack.push(1);
 stack.push(2);
 stack.push(3);

 stack.print();
    console.log(stack.peek());
    console.log(stack.pop() );