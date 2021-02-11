const { expect } = require('@jest/globals');
const { Node, LinkedList } = require('./index');

describe("Linked List", () => {
	describe("Testing addAtEnd method", () => {
		it("should add node3 at the end of the list", () => {
			// Arrange
			let expectedList = new LinkedList();
			expectedList.head = new Node(1);
			expectedList.head.next = new Node(2);
			expectedList.head.next.next = new Node(3);
			expectedList.length = 3;
			
			let list = new LinkedList();
			list.head = new Node(1);
			list.head.next = new Node(2);
			list.length = 2;
			
			//Act
			list.addAtEnd(new Node(3));
	
			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	
		it("should add a node as the head node when the list is empty", () => {
			// Arrange
			let expectedList = new LinkedList();
			expectedList.head = new Node(1);
			expectedList.length = 1;
	
			let list = new LinkedList();
	
			//Act
			list.addAtEnd(new Node(1)); 
			
			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	});
	describe("Testing addAtHead method", () => {
		it("should add node3 at the head of the list", () => {
			// Arrange
			let expectedList = new LinkedList();
			expectedList.head = new Node(3);
			expectedList.head.next = new Node(1);
			expectedList.head.next.next = new Node(2);
			expectedList.length = 3;
	
			let list = new LinkedList();
			list.length = 2;
			list.head = new Node(1);
			list.head.next = new Node(2);
	
			//Act
			list.addAtHead(new Node(3)); 
			
			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	
		it("should add a node successfully as the only node in the list", () => {
			// Arrange
			let node1 = new Node(1);
	
			let expectedList = new LinkedList();
			expectedList.head = node1;
			expectedList.length = 1;
	
			let list = new LinkedList();
			
			//Act
			list.addAtHead(node1); 
			
			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	});
	
	
	describe("Testing addAtIndex method", () => {
		it("should add node3 at index 2", () => {
			// Arrange
			let expectedList = new LinkedList();
			expectedList.head = new Node(1);
			expectedList.head.next = new Node(2);
			expectedList.head.next.next = new Node(3);
			expectedList.head.next.next.next = new Node(4);
			expectedList.length = 4;
			
			let list = new LinkedList();
			list.head = new Node(1);
			list.head.next = new Node(2);
			list.head.next.next = new Node(4);
			list.length = 3;
			
			//Act
			list.addAtIndex(new Node(3), 2);
	
			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	
	});
	
	describe("Testing removeAtHead method", () => {
		it("should remove node1 and set node2 as the head node", () => {
			// Arrange
	
			let expectedList = new LinkedList();
			expectedList.head = new Node(2);
			expectedList.head.next = new Node(3);
			expectedList.length = 2;
			
			let list = new LinkedList();
			list.head = new Node(1);
			list.head.next = new Node(2);
			list.head.next.next = new Node(3);
			list.length = 3
	
			// Act
			list.removeAtHead();
	
			// Assert
			expect(list).toStrictEqual(expectedList);
		});
	});
	
	describe("Testing removeAtEnd method", () => {
		it("should remove node3", () => {
			// Arrange
			let expectedList = new LinkedList();
			expectedList.head = new Node(1);
			expectedList.head.next = new Node(2);
			expectedList.length = 2;
			
			let list = new LinkedList();
			list.head = new Node(1);
			list.head.next = new Node(2);
			list.head.next.next = new Node(3);
			list.length = 3
	
			// Act
			list.removeAtEnd();
	
			// Assert
			expect(list).toStrictEqual(expectedList);
		});
	});
	
	describe("Testing removeAtIndex method", () => {
		it("should remove node2", () => {
			// Arrange
			let expectedList = new LinkedList();
			expectedList.head = new Node(1);
			expectedList.head.next = new Node(3);
			expectedList.length = 2;
			
			let list = new LinkedList();
			list.head = new Node(1);
			list.head.next = new Node(2);
			list.head.next.next = new Node(3);
			list.length = 3
	
			// Act
			list.removeAtIndex(1); // remove node 2 at index 1
	
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
			let list = new LinkedList();
			list.head = node1;
			node1.next = node2;
			node2.next = node3;
			list.length = 3
			
			// mock function
			console.log = jest.fn();;
			
			// Act
			list.print()
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
			let list = new LinkedList();
			list.head = node1;
			node1.next = node2;
			node2.next = node3;
			list.length = 3
			
			// mock function
			console.log = jest.fn();;
			
			// Act
			list.reversePrint()
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
			let expectedList = new LinkedList();
			expectedList.addAtEnd(new Node(3));
			expectedList.addAtEnd(new Node(2));
			expectedList.addAtEnd(new Node(1));
			expectedList.length = 3

			let list = new LinkedList();
			list.addAtEnd(new Node(1));
			list.addAtEnd(new Node(2));
			list.addAtEnd(new Node(3));
			list.length = 3;
			
			// Act
			list.reverse();
	
			// Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

})

