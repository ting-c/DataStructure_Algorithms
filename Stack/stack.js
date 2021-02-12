class Stack {
	// LIFO = Last In First Out 

	constructor(){
		this.items = [];
		// empty stack with current highest index = -1
		this.top = -1;
	}

	push(item) {
		this.items.push(item);
		this.top += 1;
	};

	pop() {
		// check if array is empty
		if (this.isEmpty()) {
			return "Stack is empty";
		}
		this.top -= 1;
		return this.items.pop();
	}

	// return the top element 
	peek() {
		if (this.isEmpty()) {
			return "Stack is empty";
		}
		return this.items[this.top];
	}

	isEmpty() {
		return this.items.length === 0
	}

	printStack() {
		if (this.isEmpty()) {
			return "Stack is empty";
		}
		for (let i = 0; i <= this.top; i++) {
			console.log(this.items[i]);
		}
	}

	reversePrintStack() {
		if (this.isEmpty()) {
			return "Stack is empty";
		}
		for (let i = this.top; i >= 0; i--) {
			console.log(this.items[i]);
		}
	}

	reverseStack() {
		if (this.isEmpty()) {
			return "Stack is empty";
		}
		let array = [];
		for (let i = this.top; i >=0; i--) {
			array.push(this.items[i]);
		}
		this.items = array;
	}
}

module.exports = Stack