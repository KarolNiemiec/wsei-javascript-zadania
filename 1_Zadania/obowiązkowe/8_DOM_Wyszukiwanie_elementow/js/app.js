document.addEventListener("DOMContentLoaded", function () {
    //Zadanie 0
    var title = document.getElementsByClassName('title')[0];

    function getDataAnimation(element){
        var animation = element.getAttribute('data-animation')
        return animation
    }
    console.log(getDataAnimation(title))

    //Zadanie 1
    function getElements(){
        var home_el = document.getElementById('home')
        console.log(home_el)
        var home_el1 = document.querySelector('#home')
        console.log(home_el1)
        var li_el = document.querySelector('ul li[data-direction]')
        console.log(li_el)
        var block_el = document.querySelector('.block')
        console.log(block_el)
    }
    getElements()

    //Zadanie 2
    function getTags(){
        var li_tag = document.querySelectorAll('nav li')
        console.log(li_tag)
        var paragraphs = document.querySelectorAll('div p')
        console.log(paragraphs)
        var article_divs = document.querySelectorAll('article div')
        console.log(article_divs)
    }
    getTags()

    //Zadanie 3
    function countTags(){
        var article_tags = document.querySelector("article[class='first']")
        var counter = article_tags.querySelectorAll('h1').length
        return counter
    }
    console.log(countTags())
});