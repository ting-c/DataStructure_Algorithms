const Stack = require("../stack");

class Postfix {
	constructor(){
		this.stack = new Stack();
		this.operator = ['+', '-', '*', '/', '^', '%']
	}

	calculate(operand1, operand2, operator) {
		switch (operator) {
			case '+':
				return operand1 + operand2;
			case '-':
				return operand1 - operand2;
			case '*':
				return operand1 * operand2;
			case '/':
				return operand1 / operand2;
			case '^':
				return operand1 ** operand2;
			case '%':
				return operand1 % operand2;
			default:
				return
		}
	}

	evaluate(string) {
		let arrayOfString = string.split(',');
		for (let str of arrayOfString) {
			if (this.isOperator(str)) {
				if (this.stack.items.length < 2)
					return 'Invalid postfix expression'
				let operand2 = this.stack.pop();
				let operand1 = this.stack.pop();
				let result = this.calculate(operand1, operand2, str);
				this.stack.push(result);
			} else if (isNaN(parseFloat(str))) {
				return 'Invalid postfix expression' 
			} else {
				// str is a number
				str = parseFloat(str);
				this.stack.push(str)
			}
		}
		if (this.stack.items.length !== 1)
			return "Invalid postfix expression";

		return this.stack.peek();
	}

	isOperator(str) {
		return this.operator.includes(str)
	}
}

module.exports = Postfix;