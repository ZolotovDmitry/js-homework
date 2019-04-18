//Строки
//1.Написать функцию поиска в строке указанной подстроки и замены ее на новую.
//Строку, ее подстроку для замены и новую подстроку вводит пользователь.
let str = "съешь же ещё этих мягких французских булок, да выпей чаю.";
let oldStrPart = "мягких";
let newStrPart = "гладких";
function strPartReplace(str, oldStrPart, newStrPart){
    let i = str.indexOf(oldStrPart);
    let newSubStr = str.substring(str.indexOf(oldStrPart) + oldStrPart.length);
    let newStr = str.substring(0, i) + newStrPart + newSubStr;
    console.log(newStr);
}
strPartReplace(str, oldStrPart, newStrPart);

//2.Вводится строка, содержащая буквы, целые неотрицательные числа и иные символы. Написать функцию, которая реализует следующий
//функционал: требуется все числа, которые встречаются в строке, поместить в отдельный целочисленный массив. Например,
//если дана строка "дом 48, корпус 9, парадная 7, этаж 4", то в массиве должны оказаться числа 48, 9, 7 и 4
let str1 = "дом 48, корпус 9, парадная 7, этаж 4";
function numReplace(str1) {
    let arr1 = str1.split(' ');
    for (let i = (arr1.length - 1); i >= 0; i--) {
        if (isNaN(parseInt(arr1[i]))) {
            arr1.splice(i, 1);// = parseInt(arr1[i]);
        } else {
            arr1[i] = parseInt(arr1[i]);
        }
    }
    console.log(arr1);
}
// без функции всё работает, при заключении в функцию выдаёт только 4 после того как открываю html заново, при перезагрузке остаётся норм

numReplace(str1);

//3.Допустим, пользователь вводит названия городов через пробел.
//Вы их присваиваете переменной. Переставьте названия так, чтобы они были упорядочены по алфавиту.
let str2 = "луганск донецк коста-рика анапа";
function unShafl(str2){
let arr2 = str2.split(' ');
arr2.sort();
str2 = arr2.join(' ');
console.log(str2);
}
unShafl(str2);


