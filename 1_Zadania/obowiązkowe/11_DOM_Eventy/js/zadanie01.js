document.addEventListener("DOMContentLoaded", function(){
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})
/*Po przeniesieniu tagu do sekcji <head> kod javascript nie zostaje wykonany poprawnie ze względu na załadowanie skryptu
przed całkmowitym załadowaniem zwartości strony
Rozwiązaniem jest napisanie skryptu wewnątrz eventu 'DOMContentLoaded', powoduje on
załadowanie skryptu dopiero po całkowitym załadowaniu zawartości strony*/