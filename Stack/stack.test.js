const { expect } = require('@jest/globals');
const Stack = require('./stack');


describe("Stack", () => {
	describe("Testing push method", () => {
		it("should add 3 at the top of the stack", () => {
			// Arrange
			let expectedStack = new Stack();
			expectedStack.items = [1, 2, 3];
			expectedStack.top = 2;

			let stack = new Stack();
			stack.items = [1, 2];
			stack.top = 1;

			//Act
			stack.push(3);
	
			//Assert
			expect(stack).toStrictEqual(expectedStack);
		});
	});

	describe("Testing pop method", () => {
		it("should return 'Stack is empty' when list is empty", () => {
			// Arrange
			let stack = new Stack();

			//Act
			let result = stack.pop();

			//Assert
			expect(result).toBe("Stack is empty");
		});

		it("should remove 3 from the top of the stack", () => {
			// Arrange
			let expectedStack = new Stack();
			expectedStack.push(1);
			expectedStack.push(2);

			let stack = new Stack();
			stack.push(1);
			stack.push(2);
			stack.push(3);

			//Act
			stack.pop(3);
	
			//Assert
			expect(stack).toStrictEqual(expectedStack);
		});
	});

	describe("Testing peek method", () => {
		it("should return 'Stack is empty' when list is empty", () => {
			// Arrange
			let stack = new Stack();

			//Act
			let result = stack.peek();

			//Assert
			expect(result).toBe("Stack is empty")
		});

		it("should remove 3 from the top of the stack", () => {
			// Arrange
			let expectedStack = new Stack();
			expectedStack.push(1);
			expectedStack.push(2);

			let stack = new Stack();
			stack.push(1);
			stack.push(2);
			stack.push(3);

			//Act
			stack.pop(3);
	
			//Assert
			expect(stack).toStrictEqual(expectedStack);
		});
	});

	describe("Testing isEmpty method", () => {
		it("should return true when list is empty", () => {
			// Arrange
			let stack = new Stack();

			//Act
			let result = stack.isEmpty();

			//Assert
			expect(result).toBe(true);
		});

		it("should return false when list is NOT empty", () => {
			// Arrange
			let stack = new Stack();
			stack.push(1);

			//Act
			let result = stack.isEmpty();

			//Assert
			expect(result).toBe(false);
		});
	});

	describe("Testing printStack method", () => {
		it("should return 'Stack is empty' when list is empty", () => {
			// Arrange
			let stack = new Stack();

			//Act
			let result = stack.printStack();

			//Assert
			expect(result).toBe("Stack is empty");
		});

		it("should print the stack from bottom to top", () => {
			// Arrange
			let stack = new Stack();
			stack.push(1);
			stack.push(2);
			stack.push(3);

			// mock function
			console.log = jest.fn();

			//Act
			stack.printStack();
			let firstPrint = console.log.mock.calls[0][0];
			let secondPrint = console.log.mock.calls[1][0];
			let thirdPrint = console.log.mock.calls[2][0];
			let fourthPrint = console.log.mock.calls[3];

			// Assert
			expect(firstPrint).toBe(1);
			expect(secondPrint).toBe(2);
			expect(thirdPrint).toBe(3);
			expect(fourthPrint).toBeUndefined();
		});
	});

	describe("Testing reversePrintStack method", () => {
		it("should return 'Stack is empty' when list is empty", () => {
			// Arrange
			let stack = new Stack();

			//Act
			let result = stack.reversePrintStack();

			//Assert
			expect(result).toBe("Stack is empty");
		});

		it("should print the stack from top to bottom", () => {
			// Arrange
			let stack = new Stack();
			stack.push(1);
			stack.push(2);
			stack.push(3);

			// mock function
			console.log = jest.fn();

			//Act
			stack.reversePrintStack();
			let firstPrint = console.log.mock.calls[0][0];
			let secondPrint = console.log.mock.calls[1][0];
			let thirdPrint = console.log.mock.calls[2][0];
			let fourthPrint = console.log.mock.calls[3];

			// Assert
			expect(firstPrint).toBe(3);
			expect(secondPrint).toBe(2);
			expect(thirdPrint).toBe(1);
			expect(fourthPrint).toBeUndefined();
		});
	});

	describe("Testing reverseStack method", () => {
		it("should return 'Stack is empty' when list is empty", () => {
			// Arrange
			let stack = new Stack();

			//Act
			let result = stack.reverseStack();

			//Assert
			expect(result).toBe("Stack is empty");
		});

		it("should reverse the order of stack", () => {
			// Arrange
			let expectedStack = new Stack();
			expectedStack.push(3);
			expectedStack.push(2);
			expectedStack.push(1);

			let stack = new Stack();
			stack.push(1);
			stack.push(2);
			stack.push(3);

			//Act
			stack.reverseStack();

			// Assert
			expect(stack).toStrictEqual(expectedStack);
		});
	});
})