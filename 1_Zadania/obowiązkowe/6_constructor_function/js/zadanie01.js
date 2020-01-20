var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

var robotKarol = new Robot("Karol")
robotKarol.sayHi("Andrzej")

var robotJan = new Robot("Jan")
robotJan.isFunctional = false
robotJan.sayHi("Andrzej")
robotJan.changeName("Kacper")

var robotPrzemek = new Robot("Przemek")
robotPrzemek.isFunctional = false
robotPrzemek.sayHi("Andrzej")
robotPrzemek.changeName("Marek")
robotPrzemek.fixIt()
robotPrzemek.sayHi("Andrzej")