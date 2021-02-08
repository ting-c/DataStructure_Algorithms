const { expect } = require('@jest/globals');
const { Node, DoublyLinkedList } = require('./index');

describe("Doubly Linked List", () => {
	describe("Testing addAtEnd method", () => {
		it("should add a node as the head node when the list is empty", () => {
			// Arrange
			let expectedList = new DoublyLinkedList();
			expectedList.head = new Node(1);
			expectedList.length = 1;

			let list = new DoublyLinkedList();

			//Act
			list.addAtEnd(new Node(1));

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should add node3 at the end of the list", () => {
			// Arrange
			let expectedList = new DoublyLinkedList();
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
			expectedList.head = node1;
			node1.next = node2;
			node2.next = node3;
			node3.prev = node2;
			node2.prev = node1;
			expectedList.length = 3;
			
			let list = new DoublyLinkedList();
			let node1_ = new Node(1);
			let node2_ = new Node(2);
			list.head = node1_;
			list.length = 2;
			node1_.next = node2_;
			node2_.prev = node1_;
			
			//Act
			list.addAtEnd(new Node(3));
	
			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

	describe("Testing addAtHead method", () => {
		it("should add a node at the head of the list", () => {
			// Arrange
			let expectedList = new DoublyLinkedList();
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
			expectedList.length = 3;
			expectedList.head = node1;
			node1.next = node2;
			node2.next = node3;
			node3.prev = node2;
			node2.prev = node1;

			let list = new DoublyLinkedList();
			let node2_ = new Node(2);
			let node3_ = new Node(3);
			list.length = 2;
			list.head = node2_;
			node2_.next = node3_;
			node3_.prev = node2_;

			//Act
			list.addAtHead(new Node(1));

			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

	describe("Testing addAtIndex method", () => {
		it("should add a node2 at index 2", () => {
			// Arrange
			let expectedList = new DoublyLinkedList();
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
			expectedList.length = 3;
			expectedList.head = node1;
			node1.next = node2;
			node2.next = node3;
			node3.prev = node2;
			node2.prev = node1;

			let list = new DoublyLinkedList();
			let node1_ = new Node(1);
			let node3_ = new Node(3);
			list.length = 2;
			list.head = node1_;
			node1_.next = node3_;
			node3_.prev = node1_;

			//Act
			list.addAtIndex(new Node(2), 1);

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should throw an error when index is invalid", () => {
			// Arrange
			let list = new DoublyLinkedList();
			let node1_ = new Node(1);
			let node3_ = new Node(3);
			list.length = 2;
			list.head = node1_;
			node1_.next = node3_;
			node3_.prev = node1_;

			//Act
			function act() {
				list.addAtIndex(new Node(2), -1);
			}

			//Assert
			expect(() => act()).toThrow("Invalid index");
		});
	});

	describe("Testing removeAtEnd method", () => {
		it("should remove node3 at the end of the list", () => {
			// Arrange
			let expectedList = new DoublyLinkedList();
			let node1 = new Node(1);
			let node2 = new Node(2);
			expectedList.length = 2;
			expectedList.head = node1;
			node1.next = node2;
			node2.prev = node1;

			let list = new DoublyLinkedList();
			let node1_ = new Node(1);
			let node2_ = new Node(2);
			let node3_ = new Node(3);
			list.length = 3;
			list.head = node1_;
			node1_.next = node2_;
			node2_.next = node3_;
			node3_.prev = node2_;
			node2_.prev = node1_;

			//Act
			list.removeAtEnd();

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should remove the only node in the list", () => {
			// Arrange
			let expectedList = new DoublyLinkedList();

			let list = new DoublyLinkedList();
			let node1_ = new Node(1);
			list.length = 1;
			list.head = node1_;

			//Act
			list.removeAtEnd();

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should have the same empty list when list is empty", () => {
			// Arrange
			let expectedList = new DoublyLinkedList();
			let list = new DoublyLinkedList();

			//Act
			list.removeAtEnd();

			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

	describe("Testing removeAtHead method", () => {
		it("should remove node1 and set node2 as the head node", () => {
			// Arrange
			let expectedList = new DoublyLinkedList();
			let node2 = new Node(2);
			let node3 = new Node(3);
			expectedList.length = 2;
			expectedList.head = node2;
			node2.next = node3;
			node3.prev = node2;

			let list = new DoublyLinkedList();
			let node1_ = new Node(1);
			let node2_ = new Node(2);
			let node3_ = new Node(3);
			list.length = 3;
			list.head = node1_;
			node1_.next = node2_;
			node2_.next = node3_;
			node3_.prev = node2_;
			node2_.prev = node1_;

			//Act
			list.removeAtHead();

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should remove the only node in the list", () => {
			// Arrange
			let expectedList = new DoublyLinkedList();

			let list = new DoublyLinkedList();
			let node1_ = new Node(1);
			list.length = 1;
			list.head = node1_;

			//Act
			list.removeAtHead();

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should have the same empty list when list is empty", () => {
			// Arrange
			let expectedList = new DoublyLinkedList();
			let list = new DoublyLinkedList();

			//Act
			list.removeAtHead();

			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

	describe("Testing removeAtIndex method", () => {
		it("should throw an error when index is invalid", () => {
			// Arrange
			let list = new DoublyLinkedList();
			let node1_ = new Node(1);
			let node3_ = new Node(3);
			list.length = 2;
			list.head = node1_;
			node1_.next = node3_;
			node3_.prev = node1_;

			//Act
			function act() {
				list.removeAtIndex(-1);
			}

			//Assert
			expect(() => act()).toThrow("Invalid index");
		});

		it("should remove the head node if index is 0", () => {
			// Arrange
			let expectedList = new DoublyLinkedList();
			let node2 = new Node(2);
			let node3 = new Node(3);
			expectedList.length = 2;
			expectedList.head = node2;
			node2.next = node3;
			node3.prev = node2;

			let list = new DoublyLinkedList();
			let node1_ = new Node(1);
			let node2_ = new Node(2);
			let node3_ = new Node(3);
			list.length = 3;
			list.head = node1_;
			node1_.next = node2_;
			node2_.next = node3_;
			node3_.prev = node2_;
			node2_.prev = node1_;

			//Act
			list.removeAtIndex(0);

			//Assert
			expect(list).toStrictEqual(expectedList);
		});

		it("should remove node 2 at index 1", () => {
			// Arrange
			let expectedList = new DoublyLinkedList();
			let node1 = new Node(1);
			let node3 = new Node(3);
			expectedList.length = 2;
			expectedList.head = node1;
			node1.next = node3;
			node3.prev = node1;

			let list = new DoublyLinkedList();
			let node1_ = new Node(1);
			let node2_ = new Node(2);
			let node3_ = new Node(3);
			list.length = 3;
			list.head = node1_;
			node1_.next = node2_;
			node2_.next = node3_;
			node3_.prev = node2_;
			node2_.prev = node1_;

			//Act
			list.removeAtIndex(1);

			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	});
})