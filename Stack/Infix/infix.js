const Postfix = require('../Postfix/postfix');

class Infix extends Postfix {
	constructor() {
		super();
		this.postfix = '';
		this.operatorsPrecedence = {
			"^": 1,
			"*": 2,
			"/": 2,
			"+": 3,
			"-": 3,
			"(": 4, // bracket precedence handled in clearStackTillOpeningBracket method
		};
	}

	isOperator(str) {
		return str in this.operatorsPrecedence;
	}

	isOpeningBracket(str) {
		return str === '('
	}

	isClosingBracket(str) {
		return str === ')'
	}

	hasHigherPrecedence(str) {
		let operatorOnTop = this.stack.peek();
		return this.operatorsPrecedence[str] < this.operatorsPrecedence[operatorOnTop];
	}

	clearStackAndAddToPostfixString() {
		while (!this.stack.isEmpty()) {
			if (this.isOpeningBracket(this.stack.peek())) {
				return
			}
			this.postfix += this.stack.pop() + ','
		}
	}

	clearStackTillOpeningBracket() {
		let openingBracket = false;
		while (!openingBracket && !this.stack.isEmpty()) {
			let str = this.stack.pop();
			if (this.isOpeningBracket(str)) {
				openingBracket = true;
			} 
			else {
				this.postfix += str + ','
			}
		}
	}

	toPostfix(string) {
		let arrayOfString = string.split(',');
		for (let str of arrayOfString) {
			if (this.isClosingBracket(str)) {
				this.clearStackTillOpeningBracket();
			}
			else if (this.isOpeningBracket(str)) {
				this.stack.push(str);
			}
			else if (this.isOperator(str)) {
				if (!this.stack.isEmpty() && !this.hasHigherPrecedence(str)) {
					this.clearStackAndAddToPostfixString();
				}
				// push current operator to stack
				this.stack.push(str);
			}
			else {
				// str is a number
				this.postfix += str + ','
			}
		}
		this.clearStackAndAddToPostfixString();
		
		// remove the comma at the end
		return this.postfix.slice(0,-1);
	}

	evaluateInfix(string) {
		let postfix = this.toPostfix(string);
		return this.evaluate(postfix);
	}
}

module.exports = Infix;