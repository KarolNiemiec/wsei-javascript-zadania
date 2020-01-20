const form = document.querySelector('.form-control')
const img = document.querySelectorAll('img')
const header = document.querySelector('.page-header')
const select = document.querySelector('select')

let appleImg = header.children[1]
let ubuntuImg = header.children[2]
let winImg = header.children[3]

appleImg.style.display = 'none'
ubuntuImg.style.display = 'none'
winImg.style.display = 'block'

select.addEventListener("click", function(){
    if(this.value == "Windows"){
        appleImg.style.display = 'none'
        ubuntuImg.style.display = 'none'
        winImg.style.display = 'block'
    }

    if(this.value == "Os X"){
        appleImg.style.display = 'block'
        ubuntuImg.style.display = 'none'
        winImg.style.display = 'none'
    }

    if(this.value == "Ubuntu"){
        appleImg.style.display = 'none'
        ubuntuImg.style.display = 'block'
        winImg.style.display = 'none'
    }
})