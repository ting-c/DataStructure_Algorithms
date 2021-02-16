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
		let search = (root, data) => {
			if (!root) {
				return false
			} 
			else if (root.data === data) {
				return true
			}
			else if (data <= root.data) {
				return search(root.left, data);
			}
			else {
				return search(root.right, data);
			}
		}

		return search(this.root, data);
	}
}

module.exports = {
	BinarySearchTree,
	Node
}