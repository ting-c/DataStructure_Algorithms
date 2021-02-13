const Postfix = require("../Postfix/postfix");
const Stack = require("../stack");

class Prefix extends Postfix {
	reverse(array) {
		array.reverse();
	}

	evaluate(string) {
		let arrayOfString = string.split(",");
		this.reverse(arrayOfString);
		for (let str of arrayOfString) {
			if (this.isOperator(str)) {
				if (this.stack.items.length < 2)
					return "Invalid prefix expression";
				let operand1 = this.stack.pop();
				let operand2 = this.stack.pop();
				let result = this.calculate(operand1, operand2, str);
				this.stack.push(result);
			} else if (isNaN(parseFloat(str))) {
				return "Invalid prefix expression";
			} else {
				// str is a number
				str = parseFloat(str);
				this.stack.push(str);
			}
		}
		if (this.stack.items.length !== 1) return "Invalid prefix expression";

		return this.stack.peek();
	}

	isOperator(str) {
		return this.operator.includes(str);
	}
}

module.exports = Prefix;
