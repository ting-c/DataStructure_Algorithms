const { expect } = require('@jest/globals');
const { Node, LinkedList } = require('../index');

describe("Linked List", () => {
	describe("Testing addAtHead method", () => {
		it("should add node3 at the head of the list", () => {
			// Arrange
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
	
			let expectedList = new LinkedList();
			expectedList.head = node3;
			node3.next = node1;
			node1.next = node2;
			expectedList.length = 3;
	
			let list = new LinkedList();
			list.length = 2;
			list.head = node1;
			node1.next = node2;
	
			//Act
			list.addAtHead(node3); 
			
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
	
	describe("Testing addAtEnd method", () => {
		it("should add node3 at the end of the list", () => {
			// Arrange
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
	
			let expectedList = new LinkedList();
			expectedList.head = node1;
			node1.next = node2;
			node2.next = node3;
			expectedList.length = 3;
			
			let list = new LinkedList();
			list.head = node1;
			node1.next = node2;
			list.length = 2;
			
			//Act
			list.addAtEnd(node3);
	
			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	
		it("should add a node as the head node when the list is empty", () => {
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
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
			let node4 = new Node(4);
	
			let expectedList = new LinkedList();
			expectedList.head = node1;
			node1.next = node2;
			node2.next = node3;
			node3.next = node4;
			expectedList.length = 4;
			
			let list = new LinkedList();
			list.head = node1;
			node1.next = node2;
			node2.next = node4;
			list.length = 3;
			
			//Act
			list.addAtIndex(node3, 2);
	
			//Assert
			expect(list).toStrictEqual(expectedList);
		});
	
	});
	
	describe("Testing removeAtHead method", () => {
		it("should remove node1 and set node2 as the head node", () => {
			// Arrange
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
	
			let expectedList = new LinkedList();
			expectedList.head = node2;
			node2.next = node3;
			expectedList.length = 2;
			
			let list = new LinkedList();
			list.head = node1;
			node1.next = node2;
			node2.next = node3;
			list.length = 3
	
			// Act
			list.removeAtHead();
	
			// Assert
			expect(list).toStrictEqual(expectedList);
			expect(list.head).toBe(node2);
		});
	});
	
	describe("Testing removeAtEnd method", () => {
		it("should remove node3", () => {
			// Arrange
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
	
			let expectedList = new LinkedList();
			expectedList.head = node1;
			node1.next = node2;
			expectedList.length = 2;
			
			let list = new LinkedList();
			list.head = node1;
			node1.next = node2;
			node2.next = node3;
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
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
	
			let expectedList = new LinkedList();
			expectedList.head = node1;
			node1.next = node3;
			expectedList.length = 2;
			
			let list = new LinkedList();
			list.head = node1;
			node1.next = node2;
			node2.next = node3;
			list.length = 3
	
			// Act
			list.removeAtIndex(1); // remove node 2 at index 1
	
			// Assert
			expect(list).toStrictEqual(expectedList);
		});
	});

})

