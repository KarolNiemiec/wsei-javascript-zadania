//Obiekty - zadanie 0a
const city = {
    name: "Mycity",
    capital: "Kraków",
    population: 1000000,
    president: "Adam Kowalski",
    primeMinisters: ["Jan Nowak", "Stanisław Kozłowski", "Marian Kowal", "Jan Kowalski"]
}
for(let atributes in city){
    console.log(city[atributes])
}

//Obiekty - Zadanie 0b
const timeMachine = {
    shape: 'Kula',
    model: 'prototyp',
    run: function(date, place){
        console.log(date + " " + place)
    }
}
for(let atributes in timeMachine){
    console.log(timeMachine[atributes])
}
timeMachine.run("1997-02-01", "Kraków")

//Obiekty - Zadanie 1
const book = {
    name: "Mybook",
    title: "Władca Pierścieni",
    author: "Tolkien",
    numberOfPages: 1000
}
for(let atributes in book){
    console.log(book[atributes])
}

//Obiekty - Zadanie 2
const person = {
    name: 'Anrzej',
    age: 23,
    sayHello: function(){
        console.log('Hello')
    }
}
for(let atributes in person){
    console.log(person[atributes])
}
person.sayHello()

//Obiekty - Zadanie 3
const recipe = {
    title: 'Tosty',
    servings: 2
}
recipe.ingredients = ['chleb tostowy','ser zółty','keczup','szynka']
for(let atributes in recipe){
    console.log(recipe[atributes])
}

//Obiekty - Zadanie 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false; //Łyżka nie istnieje - zwracana jest wartość 'false'