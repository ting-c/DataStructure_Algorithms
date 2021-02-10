const { expect } = require("@jest/globals");
const { Node, CircularSinglyLinkedList } = require("./csll");

describe("Linked List", () => {
	describe("Testing addAtEnd method", () => {
		it("should add node3 at the end of the list and link node3 to the head node", () => {
			// Arrange
			let expectedList = new CircularSinglyLinkedList();
			expectedList.head = new Node(1);
			expectedList.head.next = new Node(2);
			expectedList.head.next.next = new Node(3);
			// link last node to head node
			expectedList.head.next.next.next = expectedList.head;
			expectedList.length = 3;

			let list = new CircularSinglyLinkedList();
			list.head = new Node(1);
			list.head.next = new Node(2);
			// link last node to head node
			list.head.next.next = list.head;
			list.length = 2;

			//Act
			list.addAtEnd(new Node(3));

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should add a node as the head node and link to itself when the list is empty", () => {
			// Arrange
			let expectedList = new CircularSinglyLinkedList();
			expectedList.head = new Node(1);
			// link to itself as the head node
			expectedList.head.next = expectedList.head 
			expectedList.length = 1;

			let list = new CircularSinglyLinkedList();

			//Act
			list.addAtEnd(new Node(1));

			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

	describe("Testing addAtHead method", () => {
		it("should add node1 at the head of the list", () => {
			// Arrange
			let expectedList = new CircularSinglyLinkedList();
			expectedList.addAtEnd(new Node(1));
			expectedList.addAtEnd(new Node(2));
			expectedList.addAtEnd(new Node(3));

			let list = new CircularSinglyLinkedList();
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));

			//Act
			list.addAtHead(new Node(1));

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should add a node successfully as the only node in the list", () => {
			// Arrange
			let expectedList = new CircularSinglyLinkedList();
			expectedList.addAtEnd(new Node(1));

			let list = new CircularSinglyLinkedList();

			//Act
			list.addAtHead(new Node(1));

			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

	describe("Testing addAtIndex method", () => {
		it("should add node3 at index 2", () => {
			// Arrange
			let expectedList = new CircularSinglyLinkedList();
			expectedList.addAtEnd(new Node(1));
			expectedList.addAtEnd(new Node(2));
			expectedList.addAtEnd(new Node(3));
			expectedList.addAtEnd(new Node(4));

			let list = new CircularSinglyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(4));

			//Act
			list.addAtIndex(new Node(3), 2);

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should add node1 at index 0 and set it as the head node", () => {
			// Arrange
			let expectedList = new CircularSinglyLinkedList();
			expectedList.addAtEnd(new Node(1));
			expectedList.addAtEnd(new Node(2));
			expectedList.addAtEnd(new Node(3));
			expectedList.addAtEnd(new Node(4));

			let list = new CircularSinglyLinkedList();
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));
			list.addAtEnd(new Node(4));

			//Act
			list.addAtIndex(new Node(1), 0);

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should add node4 at index 3 and set link to the head node", () => {
			// Arrange
			let expectedList = new CircularSinglyLinkedList();
			expectedList.addAtEnd(new Node(1));
			expectedList.addAtEnd(new Node(2));
			expectedList.addAtEnd(new Node(3));
			expectedList.addAtEnd(new Node(4));

			let list = new CircularSinglyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));

			//Act
			list.addAtIndex(new Node(4), 3);

			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

	describe("Testing removeAtHead method", () => {
		it("should remove node1 and set node2 as the head node", () => {
			// Arrange

			let expectedList = new CircularSinglyLinkedList();
			expectedList.addAtEnd(new Node(2));
			expectedList.addAtEnd(new Node(3));

			let list = new CircularSinglyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));

			// Act
			list.removeAtHead();

			// Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should remove the only node in the list", () => {
			// Arrange
			let expectedList = new CircularSinglyLinkedList();

			let list = new CircularSinglyLinkedList();
			list.addAtEnd(new Node(1));

			// Act
			list.removeAtHead();

			// Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should return the same list when list is empty", () => {
			// Arrange
			let expectedList = new CircularSinglyLinkedList();

			let list = new CircularSinglyLinkedList();

			// Act
			list.removeAtHead();

			// Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

	describe("Testing removeAtEnd method", () => {
		it("should return an empty list when list is empty", () => {
			// Arrange
			let expectedList = new CircularSinglyLinkedList();

			let list = new CircularSinglyLinkedList();

			// Act
			list.removeAtEnd();

			// Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should remove the only node in the list", () => {
			// Arrange
			let expectedList = new CircularSinglyLinkedList();

			let list = new CircularSinglyLinkedList();
			list.addAtEnd(new Node(1));

			// Act
			list.removeAtEnd();

			// Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should remove node3", () => {
			// Arrange
			let expectedList = new CircularSinglyLinkedList();
			expectedList.addAtEnd(new Node(1));
			expectedList.addAtEnd(new Node(2));

			let list = new CircularSinglyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));

			// Act
			list.removeAtEnd();

			// Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

	describe("Testing removeAtIndex method", () => {
		it("should remove node2", () => {
			// Arrange
			let expectedList = new CircularSinglyLinkedList();
			expectedList.addAtEnd(new Node(1));
			expectedList.addAtEnd(new Node(3));

			let list = new CircularSinglyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));

			// Act
			list.removeAtIndex(1); // remove node 2 at index 1

			// Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should remove node3 and link node2 to node1", () => {
			// Arrange
			let expectedList = new CircularSinglyLinkedList();
			expectedList.addAtEnd(new Node(1));
			expectedList.addAtEnd(new Node(2));

			let list = new CircularSinglyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));

			// Act
			list.removeAtIndex(2); 

			// Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

	describe("Testing print method", () => {
		it("should print nodes in order", () => {
			// Arrange
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
			let list = new CircularSinglyLinkedList();
			list.addAtEnd(node1);
			list.addAtEnd(node2);
			list.addAtEnd(node3);

			// mock function
			console.log = jest.fn();

			// Act
			list.print();
			let firstPrint = console.log.mock.calls[0][0];
			let secondPrint = console.log.mock.calls[1][0];
			let thirdPrint = console.log.mock.calls[2][0];

			// Assert
			expect(firstPrint).toBe(node1);
			expect(secondPrint).toBe(node2);
			expect(thirdPrint).toBe(node3);
		});
	});

	describe("Testing reversePrint method", () => {
		it("should print nodes in reverse order", () => {
			// Arrange
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
			let list = new CircularSinglyLinkedList();
			list.addAtEnd(node1);
			list.addAtEnd(node2);
			list.addAtEnd(node3);

			// mock function
			console.log = jest.fn();

			// Act
			list.reversePrint();
			let firstPrint = console.log.mock.calls[0][0];
			let secondPrint = console.log.mock.calls[1][0];
			let thirdPrint = console.log.mock.calls[2][0];

			// Assert
			expect(firstPrint).toBe(node3);
			expect(secondPrint).toBe(node2);
			expect(thirdPrint).toBe(node1);
		});
	});

	describe("Testing reverse method", () => {
		it("should reverse the list", () => {
			// Arrange
			let expectedList = new CircularSinglyLinkedList();
			expectedList.addAtEnd(new Node(3));
			expectedList.addAtEnd(new Node(2));
			expectedList.addAtEnd(new Node(1));

			let list = new CircularSinglyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));

			// Act
			list.reverse();

			// Assert
			expect(list).toStrictEqual(expectedList);
		});
	});
});
