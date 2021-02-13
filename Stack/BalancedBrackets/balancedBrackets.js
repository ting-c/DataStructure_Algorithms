const Stack = require("../stack");

// Solution for balanced brackets problem
class BalancedBrackets {
	constructor() {
		this.brackets = {
			'{' : '}',
			'[' : ']',
			'(' : ')'
		};
		this.stack = new Stack();
		this.closingBracket = Object.values(this.brackets);
	};
	
	check(string) {
		let arrayOfString = string.split('');
		for (let str of arrayOfString) {
			// if string is a opening bracket
			if (str in this.brackets) {
				this.stack.push(str);
			} 
			// if string is a closing bracket
			else if (this.closingBracket.includes(str)) {
				if (this.stack.isEmpty()) {
					return false;
				}
				let openingBracket = this.stack.peek();
				let closingBracket = this.brackets[openingBracket];
				if (str === closingBracket) {
					this.stack.pop();
				}
			}
		}
		
		return this.stack.isEmpty()
	}
}

module.exports = BalancedBrackets