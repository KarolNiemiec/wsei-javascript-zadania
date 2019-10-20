//Tablice - Zadanie 0
function distFormAverage(numberArray){
    var avg = 0;
    numberArray.forEach(element => {
        avg += element;
    });
    avg = avg / numberArray.length;
    console.log(avg);
    var returnArray = [];
    numberArray.forEach(element => {
        returnArray.push(element - avg)
    });
    return returnArray;
}
distFormAverage([1,2,3,4,5,6,7]);

//Tablice - Zadanie 1
let fruits = ['strawberry','banana','apple','orange','raspberry','blueberry'];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
for(let i = 0; i <= fruits.length; i++){
    console.log(fruits[i]);
}

//Tablice - Zadanie 3
function printTable(array){
    for(let i = 0; i <= array.length; i++){
        console.log(array[i]);
    }
}

printTable([1,2,3,4,5]);

//Tablice - Zadanie 4
function multiply(array){
    var multiplication = 1;
    for(let i = 0; i < array.length; i++){
        multiplication = multiplication * array[i];
    }
    console.log(multiplication);
}

multiply([1,2,3,4,5,6,7]);

//Tablice - Zadanie 5
function getEvenAverage(array){
    var avg = 0;
    var evenList = [];
    array.forEach(element => {
        if(element % 2 == 0){
            evenList.push(element);
        }
    });
    evenList.forEach(element => {
        avg += element;
    });
    avg = avg / evenList.length;
    console.log(avg);
}

getEvenAverage([1,2,3,4,5,6,7]); 

//Tablice - Zadanie 6
function sortArray(array){
    function compareNumbers(arrayFirstValue, arraySecondValue){
        if(arrayFirstValue < arraySecondValue){
            return -1;
        }
        if(arrayFirstValue > arraySecondValue){
            return 1;
        }
        else{
            return 0;
        }
    }
    console.log(array.sort(compareNumbers));
}

sortArray([145,11,3,64,4,6,10]);

//Tablice - Zadanie 7
function addArrays(firstArray, secondArray){
    var sumArrays = [];
    for(let i = 0; i < firstArray.length; i++){
        for(let j = 0; j < secondArray.length; j++){
            Array.push.apply(firstArray[i], secondArray[j]);
        }
    }
    console.log(firstArray);
}

addArrays([4,0,1,3,4], [1,9,6,7,8,17]); 
