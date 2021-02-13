const { expect } = require('@jest/globals');
const BalancedBrackets = require('./balancedBrackets');


describe("BalancedBrackets", () => {
	// true
	const string1 = '{}';
	const string2 = '{{}}';
	const string3 = '{()}';
	const string4 = '123{[]}dfg';
	const string5 = '[1  {2   } ]  4';
	const string6 = '(!![1{2}3]4)';
	const string7 = '{([{12}55{b!oj}])}';
	const string8 = '[ab]';
	const string9 = '[  ] { 1 } ()';
	const string10 = '[]45({qwer}!"£)%^&[ghjj](pfok0)';

	// false
	const string11 = '}';
	const string12 = ']{}[]';
	const string13 = '({)}';
	const string14 = '[(){}({)])}';
	const string15 = '[(2)]{.})([!]';
	const string16 = '}[[1]]}';

	it(`should return true for ${string1}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string1);

		//Assert
		expect(result).toBe(true);
	});
	it(`should return true for ${string2}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string2);

		//Assert
		expect(result).toBe(true);
	});
	it(`should return true for ${string3}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string3);

		//Assert
		expect(result).toBe(true);
	});
	it(`should return true for ${string4}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string4);

		//Assert
		expect(result).toBe(true);
	});
	it(`should return true for ${string5}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string5);

		//Assert
		expect(result).toBe(true);
	});
	it(`should return true for ${string6}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string6);

		//Assert
		expect(result).toBe(true);
	});
	it(`should return true for ${string7}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string7);

		//Assert
		expect(result).toBe(true);
	});
	it(`should return true for ${string8}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string8);

		//Assert
		expect(result).toBe(true);
	});
	it(`should return true for ${string9}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string9);

		//Assert
		expect(result).toBe(true);
	});
	it(`should return true for ${string10}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string10);

		//Assert
		expect(result).toBe(true);
	});

	// FALSE
	it(`should return true for ${string11}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string11);

		//Assert
		expect(result).toBe(false);
	});
	it(`should return true for ${string12}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string12);

		//Assert
		expect(result).toBe(false);
	});
	it(`should return true for ${string13}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string13);

		//Assert
		expect(result).toBe(false);
	});
	it(`should return true for ${string14}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string14);

		//Assert
		expect(result).toBe(false);
	});
	it(`should return true for ${string15}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string15);

		//Assert
		expect(result).toBe(false);
	});
	it(`should return true for ${string16}`, () => {
		// Arrange
		let balancedBrackets = new BalancedBrackets();

		//Act
		let result = balancedBrackets.check(string16);

		//Assert
		expect(result).toBe(false);
	});

})