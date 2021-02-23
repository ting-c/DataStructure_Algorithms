class Node {
	constructor(data) {
		this.data = data
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		// Recursive function
		let insert = (root, data) => {
			if (!root) {
				return new Node(data);
			}
			else if (data <= root.data) {
				root.left = insert(root.left, data)
			} 
			else {
				root.right = insert(root.right, data)
			}
			return root
		}

		this.root = insert(this.root, data);
	}

	search(data) {
		// Recursive function
		let search = (node, data) => {
			if (!node) {
				return null
			} 
			else if (node.data === data) {
				return node
			}
			else if (data <= node.data) {
				return search(node.left, data);
			}
			return search(node.right, data);
		}

		return search(this.root, data);
	}

	min() {
		if (!this.root)
			return null;
		let node = this.root;
		while (node.left) {
			node = node.left;
		}
		return node.data; 
	}

	max() {
		if (!this.root)
			return null;
		let node = this.root;
		while (node.right) {
			node = node.right;
		}
		return node.data; 
	}	

}

module.exports = {
	BinarySearchTree,
	Node
}