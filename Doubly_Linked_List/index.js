class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	addAtEnd(node) {
		if (this.length === 0) {
			this.head = node;
		} else {
			let currentNode = this.head;
			// get to the last node
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.next = node;
			node.prev = currentNode;
		}
		this.length += 1;
	}

	addAtHead(node) {
		if (this.length === 0) {
			this.head = node;
		} else {
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}
		this.length += 1;
	}

	addAtIndex(node, index) {
		if (index < 0 || index >= this.length) {
			throw "Invalid index";
		}
		if (index === 0) {
			this.addAtHead(node);
			return;
		} else {
			let currentIndex = 0;
			let currentNode = this.head;
			while (currentIndex < index) {
				currentNode = currentNode.next;
				currentIndex += 1;
			}
			let nextNode = currentNode;
			let prevNode = currentNode.prev;
			node.prev = prevNode;
			node.next = nextNode;
			prevNode.next = node;
			nextNode.prev = node;
		}
		this.length += 1;
	}

	removeAtEnd() {
		if (this.length === 0) {
			return;
		}
		if (this.length === 1) {
			this.head = null;
		} else {
			let currentNode = this.head;
			// get to the last node
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.prev.next = null;
		}
		this.length -= 1;
	}

	removeAtHead() {
		if (this.length === 0) {
			return;
		}
		if (this.length === 1) {
			this.head = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
		}
		this.length -= 1;
	}

	removeAtIndex(index) {
		if (index < 0 || index >= this.length) {
			throw "Invalid index";
		}
		if (index === 0) {
			this.removeAtHead();
			return;
		}
		let currentNode = this.head;
		let currentIndex = 0;
		while (currentIndex < index) {
			currentNode = currentNode.next;
			currentIndex += 1;
		}
		let prevNode = currentNode.prev;
		let nextNode = currentNode.next;
		prevNode.next = nextNode;
		nextNode.prev = prevNode;
		this.length -= 1;
	}

	print() {
		let currentNode = this.head;
		do {
			console.log(currentNode);
			currentNode = currentNode.next;
		} while (currentNode);
	}

	reversePrint() {
		function print(node) {
			if (!node) return;
			// recursive call
			print(node.next);
			console.log(node);
		}
		let currentNode = this.head;
		print(currentNode);
	}

	reverse() {
		let reverse = (node) => {
			if (!node.next) {
				this.head = node;
				this.head.prev = null;
				return;
			}
			reverse(node.next);
			// reverse link
			let prevNode = node.prev;
			let nextNode = node.next;
			nextNode.next = node;
			node.prev = nextNode;
			node.next = prevNode;
		};
		let currentNode = this.head;
		reverse(currentNode);
	}
}

class Node {
	constructor(element) {
		this.element = element;
		this.prev = null;
		this.next = null;
	}
}

module.exports = {
	DoublyLinkedList,
	Node
}