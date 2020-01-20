Hello()
function Hello(){
    console.log('Cześć')
}
Hello()
//Funkcja wykonuje się poprawnie bez względu na miejsce wywołania

sayhey()
var sayhey = function(){
    console.log('Witaj')
}
sayhey()
//Ponieważ z 'sayhey' jest wyrażeniem funkcyjnym, czyli deklaracja funkcji jest przypisana zmiennej
//Dlatego można ją wywołać tylko poniżej deklaracji
//W przeciwnym przypadku zwrócony zosatnie błąd ponieważ nie jest widoczna powyżej deklaracji