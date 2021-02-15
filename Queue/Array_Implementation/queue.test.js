const { expect } = require("@jest/globals");
const Queue = require("./queue");

describe("Queue", () => {
	let queue;
	beforeEach(() => {
		queue = new Queue();
	});

	describe("Testing enqueue method", () => {
		it("adds the only element into queue and set fields front and rear to 0", () => {
			// Arrange
			let expectedQueue = new Queue();
			expectedQueue.items = [1];
			expectedQueue.front = 0;
			expectedQueue.rear = 0;

			// Act
			queue.enqueue(1);

			// Assert
			expect(queue).toStrictEqual(expectedQueue);
		});

		it("adds the element into the end of queue and set fields front and rear correctly", () => {
			// Arrange
			let expectedQueue = new Queue();
			expectedQueue.items = [1, 2, 3];
			expectedQueue.front = 0;
			expectedQueue.rear = 2;
		
			// Act
			[1, 2, 3].forEach((i) => queue.enqueue(i));

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
			let expectedItem = 1;
			
			queue.enqueue(1);

			// Act
			let item = queue.dequeue();

			// Assert
			expect(item).toBe(expectedItem);
			expect(queue).toStrictEqual(expectedQueue);
		});

		it("returns the first element in the queue", () => {
			// Arrange
			let expectedQueue = new Queue();
			[2, 3].forEach((i) => expectedQueue.enqueue(i));

			let expectedItem = 1;
			
			[1, 2, 3].forEach((i) => queue.enqueue(i));
			
			// Act
			let item = queue.dequeue();

			// Assert
			expect(item).toBe(expectedItem);
			expect(queue).toStrictEqual(expectedQueue);
		});
	})

	describe("Testing front method", () => {
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
			[1, 2, 3].forEach(i => expectedQueue.enqueue(i));
			
			let expectedItem = 1;

			[1, 2, 3].forEach(i => queue.enqueue(i));

			// Act
			let item = queue.peek();

			// Assert
			expect(item).toStrictEqual(expectedItem);
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
			expect(result).toStrictEqual(expectedResult);
		});

		it("returns false when the queue is not empty", () => {
			// Arrange
			let expectedResult = false;

			[1, 2, 3].forEach(i => queue.enqueue(i));

			// Act
			let result = queue.isEmpty();

			// Assert
			expect(result).toStrictEqual(expectedResult);
		});
	})
	
})