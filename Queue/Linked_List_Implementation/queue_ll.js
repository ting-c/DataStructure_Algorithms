// Queue implementation using linked list
// FIFO - First In First Out
// Dequeue at head , enqueue at tail

class Queue {
	constructor() {
		this.front = null;
		this.rear = null;
	}

	enqueue(element) {
		if (this.isEmpty()) {
			this.front = element;
		} else {
			// link current rear node to element
			this.rear.next = element;
		}
		// set element as new rear node
		this.rear = element;
	}

	dequeue() {
		if (this.isEmpty())
			return 'Queue is empty';
		let item = this.front;
		if (item === this.rear) {
			// queue will become empty
			this.front = null;
			this.rear = null;
		} 
		else {
			// set the front node to the next node
			this.front = this.front.next;
		}
		return item;
	}

	peek() {
		if (this.isEmpty()) 
			return "Queue is empty";
		let item = this.front;
		return item;
	}

	isEmpty() {
		return this.front === null
	}
}

class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

module.exports = { 
	Queue,
	Node
};