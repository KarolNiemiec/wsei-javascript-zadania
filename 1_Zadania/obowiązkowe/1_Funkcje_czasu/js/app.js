//Funkcje czasu - Zadanie 0
function countHello(number){
    let count = 0
    let intervalID = setInterval(() => {
        count++
        console.log('Hello', count)
        if(count === number){
            clearInterval(intervalID)
        }
    }, 500)
}
countHello(8)