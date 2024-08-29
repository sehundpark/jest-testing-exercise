class Calculator {
  constructor(firstVal, secondVal) {
    this.firstVal = firstVal;
    this.secondVal = secondVal;
  }
  add() {
    return this.firstVal + this.secondVal;
  }
  subtract() {
    return this.firstVal - this.secondVal;
  }
  divide() {
    return this.firstVal / this.secondVal;
  }
  multiply() {
    return this.firstVal * this.secondVal;
  }
}

module.exports = Calculator;
