const util = require('util');

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	addAtHead(node) {
		node.next = this.head;
		this.head = node;
		this.length += 1;
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
		}
		this.length += 1;
	}

	addAtIndex(node, index) {
		if (index < 0 || index > this.length) {
			throw 'Invalid index'
		}

		if (index === 0) {
			this.addAtHead(node);
			return
		}

		let currentNode = this.head;
		let previousNode = null;
		let currentIndex = 0;
		// get to the position specified by index
		while (currentIndex !== index) {
			currentIndex += 1;
			previousNode = currentNode;
			currentNode = currentNode.next;
		}
		// add the new node and set the links
		previousNode.next = node;
		node.next = currentNode;
		this.length += 1;
	}

	removeAtHead() {
		if (this.length === 0) return
		if (this.length === 1) {
			this.head = null;
		} else {
			this.head = this.head.next;
		}
		this.length -= 1;
	}

	removeAtEnd() {
		if (this.length === 0) return;
		if (this.length === 1) {
			this.head = null;
		} else {
			let currentNode = this.head;
			let previousNode = null;
			while (currentNode.next) {
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = null;
		}
		this.length -= 1;
	}

	removeAtIndex(index) {
		if (index < 0 || index >= this.length) {
			throw 'Invalid index'
		}
		if (index === 0) {
			this.removeAtHead();
			return
		}
		let currentIndex = 0;
		let currentNode = this.head;
		let previousNode = null;
		while (currentIndex !== index) {
			previousNode = currentNode;
			currentNode = currentNode.next;
			currentIndex += 1;
		}
		previousNode.next = currentNode.next;
		this.length -= 1;
	}

	print() {
		let currentNode = this.head;
		do {
			console.log(currentNode);
			currentNode = currentNode.next;
		} while (currentNode)
	}

	reversePrint() {
		function print(node) {
			if (!node) 
				return;
			// recursive call
			print(node.next)
			console.log(node);
		};
		let currentNode = this.head;
		print(currentNode);
	}

	reverse() {
		let reverse = (node) => {
			if (!node.next) {
				this.head = node;
				return
			}
			reverse(node.next);
			// reverse link
			let nextNode = node.next;
			nextNode.next = node;
			node.next = null;
		}
		let currentNode = this.head;
		reverse(currentNode);
	}
}

class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

function showNestedObject(linkedList) {
	console.log(util.inspect(linkedList, true, null, true))
}

module.exports = { 
	Node,
	LinkedList
}

