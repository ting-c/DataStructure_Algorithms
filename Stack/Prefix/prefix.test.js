const { expect } = require("@jest/globals");
const Prefix = require("./prefix");

describe("BalancedBrackets", () => {
	let prefix;

	beforeEach(() => {
		prefix = new Prefix();
	});

	describe("Testing reverse method", () => {
		// Arrange
		const tests = [
			{
				array: [1, 2, 3, 4, 5],
				expectedResult: [5, 4, 3, 2, 1]
			},
			{
				array: ['+', 2, 3, '-', 5],
				expectedResult: [5, '-', 3, 2, '+']
			},
			{
				array: ['1', '2', '3', '4', '5'],
				expectedResult: ['5', '4', '3', '2', '1']
			},
			{
				array: ['1', 2, '3', 4, '5'],
				expectedResult: ['5', 4, '3', 2, '1']
			}
		];

		for (let test of tests) {
			const { array, expectedResult } = test;
			it(`should reverse ${array} to ${expectedResult}`, () => {
				//Act
				prefix.reverse(array);

				//Assert
				expect(array).toStrictEqual(expectedResult);
			});
		}
	});

	describe("Testing evaluate method", () => {
		// Arrange
		const invalidPrefixExpression = "Invalid prefix expression";
		const tests = [
			{
				expression: "",
				result: invalidPrefixExpression,
			},
			{
				expression: "2,3,+",
				result: invalidPrefixExpression,
			},
			{
				expression: "+, ,2,3",
				result: invalidPrefixExpression,
			},
			{
				expression: "1,-,2,3",
				result: invalidPrefixExpression,
			},
			{
				expression: "-,2,b",
				result: invalidPrefixExpression,
			},
			{
				expression: "*,a,b",
				result: invalidPrefixExpression,
			},
			{
				expression: "+,1,2",
				result: 3,
			},
			{
				expression: "+,*,2,3,7",
				result: 13,
			},
			{
				expression: "/,+,*,2,3,8,1.4",
				result: 10,
			},
			{
				expression: "^,5,2",
				result: 25,
			},
			{
				expression: "+,^,5,2,*,3,2",
				result: 31,
			},
			{
				expression: "-,+,^,5,2,*,3,2,/,1,2",
				result: 30.5,
			},
			{
				expression: "/,+,^,%,7,3,2,/,8,/,1,2,2",
				result: 8.5,
			},
		];

		for (let test of tests) {
			it(`should return ${test.result} for ${test.expression}`, () => {
				//Act
				let result = prefix.evaluate(test.expression);

				//Assert
				expect(result).toBe(test.result);
			});
		}
	});
});