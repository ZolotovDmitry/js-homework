//1.Написать функцию со следующими аргументами: объект, from (значение от), to (значение до). Функция должна вернуть
//объект с товарами, цены которых лежат в диапазоне от значения from до значения to. Пример вызова функции
//getGoods(goods, 2000, 3000); в данном случае функция должна вернуть все товары, у которых цена в диапазоне
//от 2000 до 3000. Для проверки функции используйте объект goods из файла с урока.
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};
// console.log(goods.harp);
// console.log(goods.harp.price);
function goodsFilter(obj, from, to){
    let filteredGoods = {};
    for (let key in obj) {
        // console.log(key);
        // console.log(obj[key]);
        // console.log(obj[key]["price"]);
        if (obj[key]["price"] >= from && obj[key]["price"] <= to){
            filteredGoods[key] = obj[key];
        }
    }
    console.log(filteredGoods);
    return filteredGoods;
}

goodsFilter(goods, 2000, 3000);
// goodsFilter(goods, 0000, 2000);


//2.Написать функцию addToCart(obj, title, countToCart) {} , где obj - объект, title - название товара,
//count - количество товара, которое нужно добавить в корзину. Функция ищет товар с указанным названием,
//если количество позволяет, то уменьшает количество товара на countToCart, если не позволяет, то выводит
//информацию об этом в консоль и завершает работу. Для проверки функции используйте объект goods из файла с урока.
function addToCart(obj, title, countToCart) {
    // console.log(goods.harp.title);
    let cartGoods = {}
    for (let key in obj) {
        if (obj[key]["title"] === title && obj[key]["count"] >= countToCart) {
            obj[key]["count"] = obj[key]["count"] - countToCart;
            cartGoods[key] = obj[key];
            console.log(cartGoods);
            // console.log(goods.harp.count);
        }else if (obj[key]["title"] === title && obj[key]["count"] < countToCart){
            console.log("недостаточно товара");
            return;
            }
        }
}
addToCart(goods, "Арфа", 2);
// addToCart(goods, "Арфа", 20);
// console.log(goods.harp.count);

//3.Напишите функцию, которая отсортирует массив объектов books по значению свойства title. Объект в файле с занятия.
let books = [
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'}
];

function booksSort(books){
books.sort(function (a, b) {
    if (a.title > b.title) {
        return 1;
    }
    if (a.title < b.title) {
        return -1;
    }
    return 0;
});
console.log(books)
}
booksSort(books);

//4.Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник -
//первый и т.д.). Выведите на экран текущий день недели.
let date = new Date();
// console.log(date);
// console.log(date.getDay());
let obj = {"понедельник": 1, "вторник":2,"среда":3, "четверг":4, "пятница":5, "суббота":6, "воскресенье":7};
for (let key in obj) {
    if (date.getDay() === obj[key]) {
        console.log("сегодня",key)
    }else if(date.getDay() == 0){console.log("сегодня воскресенье")}
}