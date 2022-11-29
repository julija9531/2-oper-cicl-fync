//Добавление товара в каталог
function addKatalog(name, description, sizes, price, available) {
    katalog[lastIdKatalog] = 
    {
        id: lastIdKatalog + 1,        //Код товара
        name: name,                   //Наименование
        description: description,     //Описание
        sizes: sizes,                 //массив возможных размеров
        price: price,                 //цена товара
        available: available,         //Признак доступности для продажи
    };
    lastIdKatalog++
};

//Добавление товара в корзину
function addKorz(good, amount) {
    korzina[lastIdKorzina] = {
        good: good,       //ссылка на товар в каталоге
        amount: amount,     //количество товара в корзине
    };
    lastIdKorzina++;
};

//Удаление товара из корзины
function delKorz(id) {
    //если удаляем по id позиции в корзине:
    //delete korzina[id];

    //если удаляем по id товара в каталоге:
    for (let i1 = 0; i1<(korzina.length);i1++) {
        if (korzina[i1] !== undefined) {
            if (korzina[i1].good == id) {
                delete korzina[i1];
                return;
            };
        };
    };
};

//Очистка корзины
function clearKorz() {
    korzina = [];
};

//Подсчет товаров в корзине:
function summKorz() {
    var summK = {
        totalAmount: 0,
        totalSumm: 0,
    };

    for (let i1 = 0; i1<(korzina.length);i1++) {
        if (korzina[i1] !== undefined) {
            summK.totalAmount = summK.totalAmount + korzina[i1].amount;
            summK.totalSumm = summK.totalSumm + katalog[(korzina[i1].good - 1)].price * korzina[i1].amount;
        };
    };

    return summK;
};

var katalog = [];
var lastIdKatalog = 0;
var korzina = [];
var lastIdKorzina = 0;

addKatalog("N1", "bla bla bla", ["S1", "S2"], 500, true);
addKatalog("N2", "bla bla bla", ["S3"], 400, true);
addKatalog("N3", "bla bla bla", ["S4", "S5"], 700, true);
addKatalog("N4", "bla bla bla", ["S1", "S2", "S3"], 900, true);
addKatalog("N5", "bla bla bla", ["S7"], 1000, false);
addKatalog("N6", "bla bla bla", ["S10", "S40"], 3000, true);

//Добавление элементов в корзину:
addKorz(2, 2);
addKorz(3, 10);

//Очистка корзины:
clearKorz();

//Добавление элементов в корзину:
addKorz(1, 5);
addKorz(4, 2);
addKorz(5, 3);


//Удаление тавара из корзины:
delKorz(4);

//Подсчет количества и стоимости товаров в корзине:
var sum = summKorz();

console.log(sum);