//Zadanie 2
function Calculator () {
    this.operations = []
  }

  Calculator.prototype.add = function(num1, num2){
      let result = num1 + num2
      this.operations.push(`added ${num1} to ${num2} got ${result}`)
  }

  Calculator.prototype.multiply = function(num1, num2){
    let result = num1 * num2
      this.operations.push(`multiplied ${num1} with ${num2} got ${result}`)
  }

  Calculator.prototype.subtract = function(num1, num2){
    let result = num1 - num2
    this.operations.push(`subtracted ${num1} from ${num2} got ${result}`)
}

Calculator.prototype.divide = function(num1, num2){
    let result = num1 / num2
    this.operations.push(`divided ${num1} by ${num2} got ${result}`)
}

Calculator.prototype.printOperations = function(){
    return this.operations
}

Calculator.prototype.clearOperations = function(){
    this.operations = []
}

const calc = new Calculator()
calc.add(1, 2)
console.log(calc.printOperations())

calc.multiply(2, 2)
console.log(calc.printOperations())

calc.subtract(3, 2)
console.log(calc.printOperations())

calc.divide(4, 2)
console.log(calc.printOperations())

console.log(calc.printOperations())

calc.clearOperations()
console.log(calc.printOperations())

const calc1 = new Calculator()
calc1.add(2, 3)
console.log(calc1.printOperations())

calc1.multiply(4, 2)
console.log(calc1.printOperations())

calc1.subtract(3, 6)
console.log(calc1.printOperations())

calc1.divide(7, 2)
console.log(calc1.printOperations())

console.log(calc1.printOperations())

calc1.clearOperations()
console.log(calc1.printOperations())