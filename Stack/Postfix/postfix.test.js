const { expect } = require('@jest/globals');
const Postfix = require('./postfix');


describe("BalancedBrackets", () => {
	let postfix;

	beforeEach(() => {
		postfix = new Postfix();
	})

	describe("Testing calculate method", () => {
		// Arrange
		const tests = [
			{
				op1: 2,
				op2: 3,
				operator: '+',
				expectedResult: 5
			},
			{
				op1: 2,
				op2: 3,
				operator: '-',
				expectedResult: -1
			},
			{
				op1: 2,
				op2: 3,
				operator: '*',
				expectedResult: 6
			},
			{
				op1: 2,
				op2: 3,
				operator: '/',
				expectedResult: 2/3
			},
			{
				op1: 2,
				op2: 3,
				operator: '^',
				expectedResult: 8
			},
			{
				op1: 2,
				op2: 3,
				operator: '%',
				expectedResult: 2
			}
		];

		for (let test of tests) {
			const { op1, op2, operator, expectedResult } = test;
			it(`should return ${expectedResult} for ${op1} ${operator} ${op2}`, () => {
				//Act
				let result = postfix.calculate(op1, op2, operator);
	
				//Assert
				expect(result).toBe(expectedResult);
			})
		}
	})

	describe("Testing evaluate method", () => {
		// Arrange
		const invalidPostfixExpression = "Invalid postfix expression";
		const tests = [
			{
				expression: "",
				result: invalidPostfixExpression,
			},
			{
				expression: "2,+,3",
				result: invalidPostfixExpression,
			},
			{
				expression: "2,3, ,+",
				result: invalidPostfixExpression,
			},
			{
				expression: "2,3,-,1",
				result: invalidPostfixExpression,
			},
			{
				expression: "2,b,-",
				result: invalidPostfixExpression,
			},
			{
				expression: "a,b,*,",
				result: invalidPostfixExpression,
			},
			{
				expression: "1,2,+",
				result: 3,
			},
			{
				expression: "2,3,*,7,+",
				result: 13,
			},
			{
				expression: "2,3,*,8,+,1.4,/",
				result: 10,
			},
			{
				expression: "5,2,^",
				result: 25,
			},
			{
				expression: "5,2,^,3,2,*,+",
				result: 31,
			},
			{
				expression: "5,2,^,3,2,*,+,1,2,/,-",
				result: 30.5,
			},
			{
				expression: "7,3,%,2,^,8,1,2,/,/,+,2,/",
				result: 8.5,
			},
		];

		for (let test of tests) {
			it(`should return ${test.result} for ${test.expression}`, () => {
				//Act
				let result = postfix.evaluate(test.expression);

				//Assert
				expect(result).toBe(test.result);
			});
		}
	})
})