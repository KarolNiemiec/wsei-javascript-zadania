//Zadanie 1
//Element o klasie first -> jego pierwsze dziecko -> jego trzecie dziecko
const first = document.querySelector('.first').firstElementChild.children[2].dataset.answer
console.log(first)

//Zadanie 2
//Element o id second -> jego rodzic -> jego czwarte dziecko
const second = document.querySelector('#second').parentElement.children[3].dataset.answer
console.log(second)

//Zadanie 3
//Element o atrybucie data-ex nastawionym na wartość third -> jego dziadek -> 
//jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko
const part_three = document.querySelector('[data-ex="third"]').parentElement.parentElement.lastElementChild.firstElementChild.children
const result = part_three[Math.floor(part_three.length / 2)].dataset.answer
console.log(result)

//Zadanie 4
//Div o klasie forth -> jego rodzic -> jego pierwsze dziecko o tagu article -> jego drugie dziecko o tagu <p>
const forth = document.querySelector('.forth').parentElement.querySelector('article').querySelectorAll('p')[1].dataset.answer
console.log(forth)