const util = require("util");
const { LinkedList } = require("../Linked_List/index");

class CircularSinglyLinkedList extends LinkedList {
	addAtEnd(node) {
		if (this.length === 0) {
			this.head = node;
		} else {
			let currentNode = this.head;
			// traverse to the last node
			while (currentNode.next !== this.head) {
				currentNode = currentNode.next;
			}
			currentNode.next = node;
		}
		node.next = this.head;
		this.length += 1;
	}

	addAtHead(node) {
		// only node in the list
		if (this.length === 0) {
			this.head = node;
			node.next = this.head;
		}
		let currentNode = this.head;
		// traverse to the last node
		while (currentNode.next !== this.head) {
			currentNode = currentNode.next;
		}
		currentNode.next = node;
		// call parent class method
		super.addAtHead(node);
	}

	addAtIndex(node, index) {
		// call parent class method
		super.addAtIndex(node, index);
		// node is the last node, link to the head node
		if (index === this.length - 1) {
			node.next = this.head;
		}
	}

	removeAtHead() {
		if (this.length === 0) return;
		if (this.length === 1) {
			this.head = null;
		} else {
			let currentNode = this.head;
			// traverse to the last node
			while (currentNode.next !== this.head) {
				currentNode = currentNode.next;
			}
			currentNode.next = this.head.next;
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
			let prevNode;
			// traverse to the last node
			while (currentNode.next !== this.head) {
				prevNode = currentNode;
				currentNode = currentNode.next;
			}
			prevNode.next = this.head;
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
		} while (currentNode !== this.head);
	}

	reversePrint() {
		let print = (node) => {
			// return when index exceeds the last index
			if (node.next === this.head) {
				console.log(node);
				return;
			}
			// recursion
			print(node.next);
			console.log(node);
		};
		print(this.head);
	}

	reverse() {
		let tempHeadNode = this.head
		let reverse = (node) => {
			if (node.next === this.head) {
				this.head = node;
				return
			}
			reverse(node.next);
			// reverse link
			let nextNode = node.next;
			nextNode.next = node;
		};
		reverse(this.head);
		// link temporary head node to new head node
		tempHeadNode.next = this.head;
	}
}

class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

function showNestedObject(linkedList) {
	console.log(util.inspect(linkedList, true, null, true));
}

module.exports = {
	Node,
	CircularSinglyLinkedList
};