const { expect } = require("@jest/globals");
const { Node, CircularDoublyLinkedList } = require("./cdll");

describe("Linked List", () => {
	describe("Testing addAtEnd method", () => {
		it("should add a node as the head node when the list is empty", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			expectedList.head = new Node(1);
			expectedList.head.next = expectedList.head;
			expectedList.head.prev = expectedList.head;
			expectedList.length = 1;

			let list = new CircularDoublyLinkedList();

			//Act
			list.addAtEnd(new Node(1));

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should add node3 at the end of the list", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
			expectedList.length = 3;
			expectedList.head = node1;
			node1.next = node2;
			node2.next = node3;
			node3.next = node1;
			node3.prev = node2;
			node2.prev = node1;
			node1.prev = node3;

			let list = new CircularDoublyLinkedList();
			let node1_ = new Node(1);
			let node2_ = new Node(2);
			list.length = 2;
			list.head = node1_;
			node1_.next = node2_;
			node2_.next = node1_;
			node2_.prev = node1_;
			node1_.prev = node2_;

			//Act
			list.addAtEnd(new Node(3));

			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

	describe("Testing addAtHead method", () => {
		it("should add node1 at the head of the list", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			expectedList.addAtEnd(new Node(1));
			expectedList.addAtEnd(new Node(2));
			expectedList.addAtEnd(new Node(3));

			let list = new CircularDoublyLinkedList();
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));

			//Act
			list.addAtHead(new Node(1));

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should add a node successfully as the only node in the list", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			expectedList.addAtEnd(new Node(1));

			let list = new CircularDoublyLinkedList();

			//Act
			list.addAtHead(new Node(1));

			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	});
	
	describe("Testing addAtIndex method", () => {
		it("should throw an error when index is invalid", () => {
			// Arrange
			let list = new CircularDoublyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(3));
	
			//Act
			function act() {
				list.addAtIndex(new Node(2), -1);
			}
	
			//Assert
			expect(() => act()).toThrow("Invalid index");
		});

		it("should add node1 as the head node", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			expectedList.addAtEnd(new Node(1));
			expectedList.addAtEnd(new Node(2));
			expectedList.addAtEnd(new Node(3));

			let list = new CircularDoublyLinkedList();
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));

			//Act
			list.addAtIndex(new Node(1), 0);

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should add a node2 at index 1", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			expectedList.addAtEnd(new Node(1));
			expectedList.addAtEnd(new Node(2));
			expectedList.addAtEnd(new Node(3));

			let list = new CircularDoublyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(3));

			//Act
			list.addAtIndex(new Node(2), 1);

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should add a node3 at index 2", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			expectedList.addAtEnd(new Node(1));
			expectedList.addAtEnd(new Node(2));
			expectedList.addAtEnd(new Node(3));

			let list = new CircularDoublyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(2));

			//Act
			list.addAtIndex(new Node(3), 2);

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

	});

	describe("Testing removeAtEnd method", () => {
		it("should return the same empty list when list is empty", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			let list = new CircularDoublyLinkedList();

			//Act
			list.removeAtEnd();

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should remove the only node in the list", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();

			let list = new CircularDoublyLinkedList();
			list.addAtEnd(new Node(1));

			//Act
			list.removeAtEnd();

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should remove node3 at the end of the list", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			expectedList.addAtEnd(new Node(1));
			expectedList.addAtEnd(new Node(2));

			let list = new CircularDoublyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));

			//Act
			list.removeAtEnd();

			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

	describe("Testing removeAtHead method", () => {
		it("should have the same empty list when list is empty", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			let list = new CircularDoublyLinkedList();

			//Act
			list.removeAtHead();

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should remove the only node in the list", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();

			let list = new CircularDoublyLinkedList();
			let node1_ = new Node(1);
			list.length = 1;
			list.head = node1_;

			//Act
			list.removeAtHead();

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should remove node1 and set node2 as the head node", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			expectedList.addAtEnd(new Node(2));
			expectedList.addAtEnd(new Node(3));

			let list = new CircularDoublyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));

			//Act
			list.removeAtHead();

			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

	describe("Testing removeAtIndex method", () => {
		it("should throw an error when index is invalid", () => {
			// Arrange
			let list = new CircularDoublyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(3));

			//Act
			function act() {
				list.removeAtIndex(-1);
			}

			//Assert
			expect(() => act()).toThrow("Invalid index");
		});

		it("should remove the head node if index is 0", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			expectedList.addAtEnd(new Node(2));
			expectedList.addAtEnd(new Node(3));

			let list = new CircularDoublyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));

			//Act
			list.removeAtIndex(0);

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should remove last node when index is length-1", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			expectedList.addAtEnd(new Node(1));
			expectedList.addAtEnd(new Node(2));

			let list = new CircularDoublyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));

			//Act
			list.removeAtIndex(2);

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should remove node 2 at index 1", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			expectedList.addAtEnd(new Node(1));
			expectedList.addAtEnd(new Node(3));

			let list = new CircularDoublyLinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));

			//Act
			list.removeAtIndex(1);

			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

	describe("Testing print method", () => {
		it("should print nodes in order without repeats", () => {
			// Arrange
			let list = new CircularDoublyLinkedList();
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
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
			let fourthPrint = console.log.mock.calls[3];

			// Assert
			expect(firstPrint).toBe(node1);
			expect(secondPrint).toBe(node2);
			expect(thirdPrint).toBe(node3);
			expect(fourthPrint).toBeUndefined();
		});
	});

	describe("Testing reversePrint method", () => {
		it("should print nodes in reverse order", () => {
			// Arrange
			let list = new CircularDoublyLinkedList();
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
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
			let fourthPrint = console.log.mock.calls[3];

			// Assert
			expect(firstPrint).toBe(node3);
			expect(secondPrint).toBe(node2);
			expect(thirdPrint).toBe(node1);
			expect(fourthPrint).toBeUndefined();
		});
	});

	describe("Testing reverse method", () => {
		it("should return the same list when list is empty", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();

			let list = new CircularDoublyLinkedList();

			// Act
			list.reverse();

			// Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should return the same list when list has only one node", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			expectedList.addAtEnd(new Node(1));

			let list = new CircularDoublyLinkedList();
			list.addAtEnd(new Node(1));

			// Act
			list.reverse();

			// Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should reverse the list", () => {
			// Arrange
			let expectedList = new CircularDoublyLinkedList();
			expectedList.addAtEnd(new Node(3));
			expectedList.addAtEnd(new Node(2));
			expectedList.addAtEnd(new Node(1));

			let list = new CircularDoublyLinkedList();
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
