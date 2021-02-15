// Queue implementation using array 
// FIFO - First In First Out
// Start = head of queue, End = tail of queue
class Queue {
	constructor() {
		this.items = [];
		this.front = -1;	// index for the head element
		this.rear = -1;	// index for the last element
	}

	enqueue(element) {
		// push element at the end of array
		this.items.push(element);
		if (this.front === -1) {
			this.front += 1;
		}
		this.rear += 1;
	}

	dequeue() {
		if (this.rear === -1)
			return 'Queue is empty';
		if (this.rear === 0) {
			// queue will become empty
			this.front -= 1;
		}
		this.rear -= 1;
		// remove the first element of array
		return this.items.shift();
	}

	peek() {
		if (this.front === -1) 
			return "Queue is empty";
		let item = this.items[this.front];
		return item;
	}

	isEmpty() {
		return this.front === -1 && this.rear === -1;
	}
}

module.exports = Queue;