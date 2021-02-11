const util = require("util");
const { DoublyLinkedList } = require("../Doubly_Linked_List/index");

class CircularDoublyLinkedList extends DoublyLinkedList {
	addAtEnd(node) {
		if (this.length === 0) {
			this.head = node;
			node.next = node;
			node.prev = node;
		} else {
			let currentNode = this.head;
			// traverse to the last node
			while (currentNode.next !== this.head) {
				currentNode = currentNode.next;
			}
			currentNode.next = node;
			node.prev = currentNode;
			node.next = this.head;
			this.head.prev = node;
		}
		this.length += 1;
	}

	addAtHead(node) {
		if (this.length === 0) {
			this.head = node;
			node.next = node;
			node.prev = node;
		} else {
			let currentNode = this.head;
			// traverse to the last node
			while (currentNode.next !== this.head) {
				currentNode = currentNode.next;
			}
			currentNode.next = node;
			node.prev = currentNode;
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}
		this.length += 1;
	}

	addAtIndex(node, index) {
		// call parent class method
		super.addAtIndex(node, index);
	}

	removeAtEnd() {
		if (this.length === 0) {
			return;
		}
		if (this.length === 1) {
			this.head = null;
		} else {
			let currentNode = this.head;
			// traverse to the last node
			while (currentNode.next !== this.head) {
				currentNode = currentNode.next;
			}
			// set new links with head node and node before the last node
			currentNode.prev.next = this.head;
			this.head.prev = currentNode.prev;
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
			let currentNode = this.head;
			// traverse to the last node
			while(currentNode.next !== this.head) {
				currentNode = currentNode.next;
			}
			// link last node to the node after head node
			currentNode.next = this.head.next;
			this.head.next.prev = currentNode;
			// set new head node
			this.head = this.head.next;
		}
		this.length -= 1;
	}

	removeAtIndex(index) {
		super.removeAtIndex(index);
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
			if (node.next === this.head) {
				console.log(node);
				return;
			}
			// recursion
			print(node.next);
			console.log(node);
		}
		print(this.head);
	}

	reverse() {
		if (this.length === 0) {
			return
		}
		let reverse = (node) => {
			if (node.next === this.head) {
				node.next = node.prev;
				node.prev = this.head;
				this.head = node;
				return;
			}
			reverse(node.next);
			// reverse link
			let prevNode = node.prev;
			let nextNode = node.next;
			node.prev = nextNode;
			node.next = prevNode;
		};
		reverse(this.head);
	}
}

class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
		this.prev = null;
	}
}

function showNestedObject(linkedList) {
	console.log(util.inspect(linkedList, true, null, true));
}


module.exports = {
	Node,
	CircularDoublyLinkedList,
};
