const { expect } = require("@jest/globals");
const { Queue , Node } = require("./queue_ll");

describe("Queue", () => {
	let queue;
	beforeEach(() => {
		queue = new Queue();
	});

	describe("Testing enqueue method", () => {
		it("adds the only node into queue and set pointers for front and rear", () => {
			// Arrange
			let node1 = new Node(1);
			let expectedQueue = new Queue();
			expectedQueue.front = node1;
			expectedQueue.rear = node1;

			// Act
			queue.enqueue(new Node(1));

			// Assert
			expect(queue).toStrictEqual(expectedQueue);
		});
		
		it("adds the element into the end of queue and set fields front and rear correctly", () => {
			// Arrange
			let expectedQueue = new Queue();
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
			expectedQueue.front = node1;
			expectedQueue.rear = node3;
			node1.next = node2;
			node2.next = node3;
		
			// Act
			[1, 2, 3].forEach((i) => queue.enqueue(new Node(i)));

			// Assert
			expect(queue).toStrictEqual(expectedQueue);
		});
	})

	describe("Testing dequeue method", () => {
		it("returns 'Queue is empty' when the queue is empty", () => {
			// Arrange
			let expectedQueue = new Queue();
			let expectedResult = 'Queue is empty';

			// Act
			let result = queue.dequeue();

			// Assert
			expect(result).toStrictEqual(expectedResult);
			expect(queue).toStrictEqual(expectedQueue);
		});

		it("returns and remove the only element in the queue", () => {
			// Arrange
			let expectedQueue = new Queue();
			let expectedItem = new Node(1);
			
			queue.enqueue(new Node(1));

			// Act
			let item = queue.dequeue();

			// Assert
			expect(item.element).toBe(expectedItem.element);
			expect(queue).toStrictEqual(expectedQueue);
		});

		it("returns the first element in the queue", () => {
			// Arrange
			let expectedQueue = new Queue();
			[new Node(2), new Node(3)].forEach((i) => expectedQueue.enqueue(i));

			let expectedItem = new Node(1);
			
			[new Node(1), new Node(2), new Node(3)].forEach((i) => queue.enqueue(i));
			
			// Act
			let item = queue.dequeue();

			// Assert
			expect(item.element).toBe(expectedItem.element);
			expect(queue).toStrictEqual(expectedQueue);
		});

		it("returns an empty queue from multiple dequeue", () => {
			// Arrange
			let expectedQueue = new Queue();

			[new Node(1), new Node(2), new Node(3)].forEach(i => queue.enqueue(i));

			// Act
			[1,2,3].map( i => queue.dequeue());

			// Assert
			expect(queue).toStrictEqual(expectedQueue);
		});
	})

	describe("Testing peek method", () => {
		it("returns 'Queue is empty' when the queue is empty", () => {
			// Arrange
			let expectedQueue = new Queue();
			let expectedResult = "Queue is empty";

			// Act
			let result = queue.peek();

			// Assert
			expect(result).toStrictEqual(expectedResult);
			expect(queue).toStrictEqual(expectedQueue);
		});

		it("returns the first element in the queue and not removing the element from queue", () => {
			// Arrange
			let expectedQueue = new Queue();
			let node1 = new Node(1);
			let node2 = new Node(2);
			let node3 = new Node(3);
			[node1, node2, node3].forEach(i => expectedQueue.enqueue(i));
			
			let expectedItem = node1;

			[node1, node2, node3].forEach(i => queue.enqueue(i));

			// Act
			let item = queue.peek();

			// Assert
			expect(item.element).toBe(expectedItem.element);
			expect(queue).toStrictEqual(expectedQueue);
		});
	})
	
	describe("Testing isEmpty method", () => {
		it("returns true when the queue is empty", () => {
			// Arrange
			let expectedResult = true;

			// Act
			let result = queue.isEmpty();

			// Assert
			expect(result).toBe(expectedResult);
		});

		it("returns false when the queue is not empty", () => {
			// Arrange
			let expectedResult = false;

			[new Node(1), new Node(2), new Node(3)].forEach(i => queue.enqueue(i));

			// Act
			let result = queue.isEmpty();

			// Assert
			expect(result).toBe(expectedResult);
		});
	})
	
})