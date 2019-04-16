// Функции
//1.Написать функцию сравнения двух массивов. Функция принимает на вход два массива, сравнивает их и возвращает true,
//если массивы равны и false, если не равны.
let arr1 = [4, 8, 15, 16, 23, 42];
let arr2 = [4, 8, 16, 15, 23, 42];

function compareArr(arr1, arr2){
    let str1 = arr1.join(';');
    let str2 = arr2.join(';');
    if (str1 === str2){
    console.log(true);
    } else {
        console.log(false);
    }
}
compareArr(arr1, arr2);
//ок если выдаёт тру и на цифру в кавычках?
let arr3 = [4, 8, 15, 16, 23, 42];
let arr4 = [4, 8, "15", 16, 23, 42];
compareArr(arr3, arr4);

//3.Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона,
//третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
//Функция возвращает массив, который содержит все числа из него, включая начальное и конечное. Например,
//вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].

function rangeArr (start, end, step){
    let arr = [start];
for (let i = 0; arr[i] + step <= end; i++){
    // console.log(arr[i] + step)
    // console.log(end)
    // console.log(arr[i] + step <= end)
    arr.push = arr[i] + step;
    }
    console.log(arr);
}
//не понимаю, почему цикл не идёт через if получится? или do while 
let start = 1;
let end = 10;
let step = 2;
rangeArr (start, end, step);


//4.Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count,
//будет выводить слово «товар» в нужно форме («12 товаров», но «22 товара» и тд).
let count = "26";
function formOfWord(count) {
    let str = count.split('');
    let i = count.length - 1;
    if (str[i] >= 5 || str[i] < 1) {
        console.log(count + " товаров");
    } else if (2 < str[i] && str[i] < 5) {
        console.log(count + " товара");
    } else {
        console.log(count + " товар");
    }
}
formOfWord(count);
formOfWord("24");
formOfWord("23");
formOfWord("1");
formOfWord("341");
formOfWord("5479");
formOfWord("5470");
