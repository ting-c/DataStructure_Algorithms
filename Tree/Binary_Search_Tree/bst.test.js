const { expect } = require("@jest/globals");
const { BinarySearchTree , Node } = require("./bst");

describe("Binary Search Tree", () => {
	let tree;
	beforeEach(() => {
		tree = new BinarySearchTree();
	});

	describe("Testing insert method", () => {
		describe("Depth 0", () => {
			it("add the first node as the root", () => {
				// Arrange
				let expectedTree = new BinarySearchTree();
				expectedTree.root = new Node(1);
	
				// Act
				tree.insert(1);
	
				// Assert
				expect(tree).toStrictEqual(expectedTree);
			});
		})

		describe("Depth 1", () => {
			it("root node's left property points to the new node with lesser key", () => {
				// Arrange
				let node10 = new Node(10);
				let node7 = new Node(7);
				let expectedTree = new BinarySearchTree();
				expectedTree.root = node10;
				node10.left = node7;
	
				// Act
				tree.insert(10);
				tree.insert(7);
	
				// Assert
				expect(tree).toStrictEqual(expectedTree);
			});
	
			it("root node's right property points to the new node with greater key", () => {
				// Arrange
				let node10 = new Node(10);
				let node12 = new Node(12);
				let expectedTree = new BinarySearchTree();
				expectedTree.root = node10;
				node10.right = node12;
	
				// Act
				tree.insert(10);
				tree.insert(12);
	
				// Assert
				expect(tree).toStrictEqual(expectedTree);
			});
	
			it("root node's right property points to the new node with greater key", () => {
				// Arrange
				let node10 = new Node(10);
				let node12 = new Node(12);
				let expectedTree = new BinarySearchTree();
				expectedTree.root = node10;
				node10.right = node12;
	
				// Act
				tree.insert(10);
				tree.insert(12);
	
				// Assert
				expect(tree).toStrictEqual(expectedTree);
			});
		})

		describe("Depth 2 - Left subtree", () => {
			it("parent node's left property points to the new node with smaller key", () => {
				// Arrange
				let node10 = new Node(10);
				let node7 = new Node(7);
				let node6 = new Node(6);
				let expectedTree = new BinarySearchTree();
				expectedTree.root = node10;
				node10.left = node7;
				node7.left = node6;

				// Act
				tree.insert(10);
				tree.insert(7);
				tree.insert(6);

				// Assert
				expect(tree).toStrictEqual(expectedTree);
			});

			it("parent node's left property points to the new node with equal key", () => {
				// Arrange
				let node10 = new Node(10);
				let node7 = new Node(7);
				let node7_ = new Node(7);
				let expectedTree = new BinarySearchTree();
				expectedTree.root = node10;
				node10.left = node7;
				node7.left = node7_;

				// Act
				tree.insert(10);
				tree.insert(7);
				tree.insert(7);

				// Assert
				expect(tree).toStrictEqual(expectedTree);
			});

			it("parent node's right property points to the new node with greater key", () => {
				// Arrange
				let node10 = new Node(10);
				let node7 = new Node(7);
				let node9 = new Node(9);
				let expectedTree = new BinarySearchTree();
				expectedTree.root = node10;
				node10.left = node7;
				node7.right = node9;

				// Act
				tree.insert(10);
				tree.insert(7);
				tree.insert(9);

				// Assert
				expect(tree).toStrictEqual(expectedTree);
			});

			it("parent node's right property points to the new node with greater key", () => {
				// Arrange
				let node10 = new Node(10);
				let node7 = new Node(7);
				let node12 = new Node(12);
				let node9 = new Node(9);
				let expectedTree = new BinarySearchTree();
				expectedTree.root = node10;
				node10.left = node7;
				node10.right = node12;
				node7.right = node9;

				// Act
				tree.insert(10);
				tree.insert(7);
				tree.insert(12);
				tree.insert(9);

				// Assert
				expect(tree).toStrictEqual(expectedTree);
			});
		});

		describe("Depth 2 - Right subtree", () => {
			it("parent node's left property points to the new node with greater key", () => {
				// Arrange
				let node10 = new Node(10);
				let node12 = new Node(12);
				let node11 = new Node(11);
				let expectedTree = new BinarySearchTree();
				expectedTree.root = node10;
				node10.right = node12;
				node12.left = node11;

				// Act
				tree.insert(10);
				tree.insert(12);
				tree.insert(11);

				// Assert
				expect(tree).toStrictEqual(expectedTree);
			});

			it("parent node's left property points to the new node with equal key", () => {
				// Arrange
				let node10 = new Node(10);
				let node12 = new Node(12);
				let node12_ = new Node(12);
				let expectedTree = new BinarySearchTree();
				expectedTree.root = node10;
				node10.right = node12;
				node12.left = node12_;

				// Act
				tree.insert(10);
				tree.insert(12);
				tree.insert(12);

				// Assert
				expect(tree).toStrictEqual(expectedTree);
			});

			it("parent node's right property points to the new node with greater key", () => {
				// Arrange
				let node10 = new Node(10);
				let node12 = new Node(12);
				let node15 = new Node(15);
				let expectedTree = new BinarySearchTree();
				expectedTree.root = node10;
				node10.right = node12;
				node12.right = node15;

				// Act
				tree.insert(10);
				tree.insert(12);
				tree.insert(15);

				// Assert
				expect(tree).toStrictEqual(expectedTree);
			});

			it("parent node's left property points to the new node with lesser key", () => {
				// Arrange
				let node10 = new Node(10);
				let node7 = new Node(7);
				let node12 = new Node(12);
				let node11 = new Node(11);
				let expectedTree = new BinarySearchTree();
				expectedTree.root = node10;
				node10.left = node7;
				node10.right = node12;
				node12.left = node11;

				// Act
				tree.insert(10);
				tree.insert(7);
				tree.insert(12);
				tree.insert(11);

				// Assert
				expect(tree).toStrictEqual(expectedTree);
			});
		});

	});

	describe("Testing search method", () => {
		it("return null when data is not in the tree", () => {
			// Arrange
			let expectedResult = null;
			let data = 2;
			tree.insert(10);
			tree.insert(7);
			tree.insert(12);
			tree.insert(11);

			// Act
			let result = tree.search(data);

			// Assert
			expect(result).toBe(expectedResult);
		});

		it("return null when data is not in the tree", () => {
			// Arrange
			let expectedResult = null;
			let data = -12;
			tree.insert(10);
			tree.insert(7);
			tree.insert(12);
			tree.insert(11);

			// Act
			let result = tree.search(data);

			// Assert
			expect(result).toBe(expectedResult);
		});

		it("return the node when data is in the tree", () => {
			// Arrange
			let expectedNode = new Node(10);
			expectedNode.left = new Node(7);
			expectedNode.right = new Node(12);
			expectedNode.right.left = new Node(11);

			tree.insert(10);
			tree.insert(7);
			tree.insert(12);
			tree.insert(11);

			// Act
			let node = tree.search(10);

			// Assert
			expect(node).toStrictEqual(expectedNode);
		});

		it("return the node when data is in the tree", () => {
			// Arrange
			let expectedNode = new Node(12);
			expectedNode.left = new Node(11);

			tree.insert(10);
			tree.insert(7);
			tree.insert(12);
			tree.insert(11);

			// Act
			let node = tree.search(12);

			// Assert
			expect(node).toStrictEqual(expectedNode);
		});
	})

	describe("Testing min method", () => {
		it("return null when data is not in the tree", () => {
			// Arrange
			let expectedResult = null;

			// Act
			let result = tree.min();

			// Assert
			expect(result).toBe(expectedResult);
		});

		it("return the min element when it is the root node", () => {
			// Arrange
			let expectedResult = 10;

			tree.insert(10);
			tree.insert(12);
			tree.insert(13);

			// Act
			let result = tree.min();

			// Assert
			expect(result).toBe(expectedResult);
		});

		it("return the min element when it is a node with a child", () => {
			// Arrange
			let expectedResult = 8;

			tree.insert(10);
			tree.insert(8);
			tree.insert(9);

			// Act
			let result = tree.min();

			// Assert
			expect(result).toBe(expectedResult);
		});

		it("return the min element when it is a leaf node", () => {
			// Arrange
			let expectedResult = 8;

			tree.insert(10);
			tree.insert(9);
			tree.insert(8);

			// Act
			let result = tree.min();

			// Assert
			expect(result).toBe(expectedResult);
		});
	})

	describe("Testing max method", () => {
		it("return null when data is not in the tree", () => {
			// Arrange
			let expectedResult = null;

			// Act
			let result = tree.max();

			// Assert
			expect(result).toBe(expectedResult);
		});

		it("return the max element when it is the root node", () => {
			// Arrange
			let expectedResult = 20;

			tree.insert(20);
			tree.insert(12);
			tree.insert(13);

			// Act
			let result = tree.max();

			// Assert
			expect(result).toBe(expectedResult);
		});

		it("return the max element when it is a node with a child", () => {
			// Arrange
			let expectedResult = 18;

			tree.insert(10);
			tree.insert(18);
			tree.insert(16);

			// Act
			let result = tree.max();

			// Assert
			expect(result).toBe(expectedResult);
		});

		it("return the max element when it is a leaf node", () => {
			// Arrange
			let expectedResult = 18;

			tree.insert(10);
			tree.insert(16);
			tree.insert(18);

			// Act
			let result = tree.max();

			// Assert
			expect(result).toBe(expectedResult);
		});
	})

	describe("Testing findHeight method", () => {
		it("return 0 for an empty tree", () => {
			// Arrange
			let expectedResult = 0;

			// Act
			let result = tree.findHeight();

			// Assert
			expect(result).toBe(expectedResult);
		});

		it("return 1", () => {
			// Arrange
			let expectedResult = 1;

			tree.insert(10);
			tree.insert(5);
			tree.insert(12);

			// Act
			let result = tree.findHeight();

			// Assert
			expect(result).toBe(expectedResult);
		});

		it("return 3", () => {
			// Arrange
			let expectedResult = 3;

			tree.insert(10);
			tree.insert(5);
			tree.insert(12);
			tree.insert(11);
			tree.insert(13);
			tree.insert(7);
			tree.insert(6);

			// Act
			let result = tree.findHeight();

			// Assert
			expect(result).toBe(expectedResult);
		});

		
	})
});