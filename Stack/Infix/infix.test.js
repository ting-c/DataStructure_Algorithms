const { expect } = require("@jest/globals");
const Infix = require("./infix");

describe("Infix", () => {
	let infix;

	beforeEach(() => {
		infix = new Infix();
	});

	describe("Testing toPostfix method", () => {
		// Arrange
		const tests = [
			{
				expression: "1,+,2",
				postfix: "1,2,+"
			},
			{
				expression: "(,1,+,2,),*,3",
				postfix: "1,2,+,3,*"
			},
			{
				expression: "1,+,-2,*,3.1",
				postfix: "1,-2,3.1,*,+"
			},
			{
				expression: "2,*,-3,+,7",
				postfix: "2,-3,*,7,+"
			},
			{
				expression: "2,*,(,3,+,7,)",
				postfix: "2,3,7,+,*"
			},
			{
				expression: "2,*,3,+,8,/,2.5",
				postfix: "2,3,*,8,2.5,/,+"
			},
			{
				expression: "(,2,*,3,+,8,),/,2.5",
				postfix: "2,3,*,8,+,2.5,/"
			},
			{
				expression: "5,^,2,+,3,*,2",
				postfix: "5,2,^,3,2,*,+"
			},
			{
				expression: "5,^,(,2,+,3,),*,2",
				postfix: "5,2,3,+,^,2,*"
			},
			{
				expression: "5,^,2,+,(,3,*,2,)",
				postfix: "5,2,^,3,2,*,+"
			},
			{
				expression: "5,^,(,2,+,(,3,*,2,),)",
				postfix: "5,2,3,2,*,+,^"
			},
			{
				expression: "5,^,(,2,+,3,),*,(,2,-,1,),*,5",
				postfix: "5,2,3,+,^,2,1,-,*,5,*"
			},
			{
				expression: "5,^,(,(,2,+,3,),*,(,2,-,1,),),*,5",
				postfix: "5,2,3,+,2,1,-,*,^,5,*"
			},
			{
				expression: "5,^,2,+,3,*,2,-,1,/,2",
				postfix: "5,2,^,3,2,*,+,1,2,/,-"
			},
			{
				expression: "5,^,(,2,+,(,3,*,(,2,-,1,),/,2,),)",
				postfix: "5,2,3,2,1,-,*,2,/,+,^"
			},
		];

		for (let test of tests) {
			const { expression, postfix } = test;
			it(`should return ${postfix} for ${expression}`, () => {
				//Act
				let result = infix.toPostfix(expression);

				//Assert
				expect(result).toBe(postfix);
			});
		}
	});

	describe("Testing evaluateInfix method", () => {
		// Arrange
		const tests = [
			{
				expression: "1,+,2",
				answer: 3
			},
			{
				expression: "(,1,+,2,),*,3",
				answer: 9
			},
			{
				expression: "1,+,-2,*,3.1",
				answer: -5.2,
			},
			{
				expression: "2,*,-3,+,7",
				answer: 1
			},
			{
				expression: "2,*,(,3,+,7,)",
				answer: 20
			},
			{
				expression: "2,*,3,+,8,/,2.5",
				answer: 9.2
			},
			{
				expression: "(,2,*,3,+,8,),/,2.5",
				answer: 5.6
			},
			{
				expression: "5,^,2,+,3,*,2",
				answer: 31
			},
			{
				expression: "5,^,(,2,+,3,),*,2",
				answer: 6250
			},
			{
				expression: "5,^,(,2,+,(,3,*,2,),)",
				answer: 390625
			},
			{
				expression: "5,^,(,2,+,3,),*,(,2,-,1,),*,5",
				answer: 15625
			},
			{
				expression: "5,^,(,(,2,+,3,),*,(,2,-,1,),*,2,)",
				answer: 9765625
			},
			{
				expression: "5,^,2,+,3,*,2,-,1,/,2",
				answer: 30.5
			}
		];

		for (let test of tests) {
			const { expression, answer } = test;
			it(`should return ${answer} for ${expression}`, () => {
				//Act
				let result = infix.evaluateInfix(expression);

				//Assert
				expect(result).toBe(answer);
			});
		}
	});
});
