/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Deklarcja funkcji `jeden()` - funkcja nie przyjmuje zadnych arguentów wejściowych
function jeden() {

    //Deklaracja zmiennej `zmienna1` - dostępna w obu funkcjach, ponieważ funkcja `jeden()` jest nadrzędna wzgelędem funkcji `dwa()`
    //Funkcja `dwa()` jest zagnieżdżona w funkcji `jeden()` więc wszystkie zmienne utworzone w funckji `jeden()` będą dostępne w obu funkcjach
    //Natomiast wszystkie zmienne utworzone w funckji `dwa()` będą dostępne jedynie w wywołaniu funckji `dwa()`
    var zmienna1 = 1;

    //Deklarcja funkcji `dwa()` - funkcja jest zagnieżdżona w funkcji `jeden()`
    function dwa() {

        //Wywołanie w konsoli zmiennej `zmienna1` - dostępna ponieważ zainicjowana w funkcji nadrzędnej
        console.log(zmienna1);

        //Deklaracja zmiennej `zmienna2` - dostępna tylko w funkcji zagnieżdżonej `dwa()`
        var zmienna2 = 3;
    }

    //Wywołanie funkcji zagnieżdżonej `dwa()`
    dwa();

    //Wywołanie w konsoli zmiennej `zmienna2` - niedostępna ponieważ zainicjowana w funkcji zagnieżdżonej `dwa()`
    //Zwrócenie błędu o niezadeklarowanej zmiennej
    console.log(zmienna2)
}

//Wywołanie funkcji zagnieżdżonej `jeden()`
jeden()

//Zmienne zadeklarowane w funkcji zagnieżdżonej będą widoczne tylko w funkcji, w której zostały zadeklarowane
//Nie są widoczne w funkcji nadrzędnej