//1.Задайте высоту, длину и ширину прямоугольного параллелепипеда и найти его площадь.Узнайте, что больше:
// ширина или высота и выведите информацию об этом в консоль.
let a = 23;
let b = 45;
let c = 37;
let s = 2*(a*b+b*c+a*c);
// console.log("площадь параллелепипеда равна " + s "m2");

if(a > c){
    console.log("высота больше ширины");
}else if(a < c){
    console.log("ширина больше высоты");
}else{
    console.log("высота равна ширине");
};

//2.На садовом участке площадью 10 соток , разбили грядки 15 на 25 метров. Сколько м2 осталось незанято?
a = 1000;
b = 15*25;
// console.log("площадь грядки " + b);
console.log("не занято " + a%b + "m2");

//3.Найдите площадь овального кольца, полученного из овала площадью 15 дм2 вырезанием овала площадью 600 см2.
a = 1500;
b = 600;
s = a-b;
console.log("площадь овального кольца = " + s + "m2");


//4.Переопределить значения переменных X и Y так, чтобы значение X оказалось меньшим, а Y — большим.
let x = 9;
let y = 8;
let z = null;
if (x>y) {
    // console.log("x" + x + "y" + y + "z" + z);
    z = y;
    // console.log("x" + x + "y" + y + "z" + z);
    y = x;
    // console.log("x" + x + "y" + y + "z" + z);
    x = z;
    // console.log("x" + x + "y" + y + "z" + z);
    console.log("переопределение, x = " + x + " <,чем y = " + y);
} else {
    console.log("x = " + x + ", y = " + y);
}
//5.Вывести в консоль ближайшее к 10 из двух чисел, записанных в
// переменные m и n.
//Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.
//     Тернарный оператор может включать несколько блоков с условиями:
//     условие ? значение1 : условие2 ? значение2 : значение3
// Метод Math.abs(число) возвращает абсолютное значение числа (модуль числа).
let m = 8.5;
let n = 11.45;
// console.log(Math.abs(m - 10));
// console.log(Math.abs(n - 10));
// console.log(Math.abs(10 - m ));
// console.log(Math.abs(10 - n ));

(Math.abs(m - 10) < Math.abs(n - 10)) ? console.log(m) :
    (Math.abs(m - 10) > Math.abs(n - 10)) ? console.log(n) :
    console.log("значения равны");