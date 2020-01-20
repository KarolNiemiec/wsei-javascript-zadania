var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum: function() {
        let result = this.a + this.b
        return result
    },
    multiply: function() {
        let result = this.a * this.b
        return result
    }
};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());
