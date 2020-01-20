document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    //Zadanie 0
    function getDatasInfo(links){
        let retArray = []
        for(let  i = 0; i < links.length; i++){
            retArray.push(links[i].getAttribute('data-color'))
        }
        return retArray
    }
    console.log(getDatasInfo(links))//TOCHECK

    //Zadanie 1
    function printData(){
        console.log(homeElement)
        
        for(let counter = 0; counter < childElements.length; counter++){
            console.log(counter)
        }

        console.log(banner)

        for(let counter = 0; counter < blocks.length; counter++){
            console.log(counter)
        }

        for(let counter = 0; counter < links.length; counter++){
            console.log(counter)
        }
    }
    printData()

    //Zadanie 2
    function changer(){
        console.log(blocks.innerHTML)
        console.log(blocks.outerHTML)
        //Zwraca 'undefined' ponieważ wartości nie są ustawione żadną wartość

        blocks.innerHTML = "Nowa wartość diva o klasie blocks"
        console.log(blocks.innerHTML)
        //Zwraca ustawioną wartość 'Nowa wartość diva o klasie blocks'
    }
    changer()

    //Zadanie 3
    var footer = document.getElementById("mainFooter");

    function getId(footer){
        return footer.getAttribute('id')
    }
    console.log(getId(footer))

    //Zadanie 4
    function getTags(elements) {
        var tab = []
        Array.prototype.forEach.call(elements, element => {
          tab.push(element.tagName)
        });
        return tab
      }
    console.log(getTags(childElements))

    //Zadanie 5
    function getClassInfo(elements){
        /*console.log(elements)
        //elements = Array.prototype.slice(elements, 0)
        let classes = []
        for(let i = 0; i < elements.length; i++){
            classes.push(elements[i].classList)
        }

        return classes*/
        return Array.from(elements.classList)
    }
    console.log(getClassInfo(banner))

    //Zadanie 6
    function setDataDirection(_elements){
        for(let i = 0; i < _elements.length; i++){
            console.log(_elements[1].dataset.direction)
            if(!_elements[i].dataset.direction !== 'top'){
                _elements[i].dataset.direction = 'top' 
            }
        }
    }
    const el = document.querySelectorAll('nav ul li')
    console.log(setDataDirection(el))
});