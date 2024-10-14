const userSurname = document.querySelector('[name="surname"]')
const userName = document.querySelector('[name="name"]')

const goodsElements = document.querySelectorAll('[name="goods"]')
const countElements = document.querySelectorAll('[type="number"]')

const btn = document.querySelector(".btn")
const resultElem = document.querySelector(".sum")


//этот объект нужен для хранения количества каждого товара
//либо, вы можете создать переменные/массив для хранения значений
const countGoods = {
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}

//этот объект нужен для хранения цены каждого товара
//т.е. если товар выбран, записываем его цену, если не выбран - записываем 0
//либо, вы можете создать переменные/массив для хранения значений
const choicePriceGoods = {
    'checkbox1': 80,
    'checkbox2': 110,
    'checkbox3': 120,
    'checkbox4': 90,
    'checkbox5': 80,
    'checkbox6': 90,
    'checkbox7': 100
}

//создайте функцию, которая будет считать итоговую сумму, подумайте над формулой.
function countsumm() {
    let total = 0;
    goodsElements.forEach((element, i) => {
        if (element.checked) {
            const kolvostr = countElements[i].value
            const pricestr = choicePriceGoods[element.id]
            const kolvo = parseInt(kolvostr)
            const price = parseInt(pricestr)
            total += kolvo * price;

        }

    })
    resultElem.textContent = `${total} р.`
}


//для каждого элемента input с кол-вом нужно повесить событие на изменение change,
//по которому в объекте должны меняться значения на значение в input
goodsElements.forEach((elem, i) => {
    elem.addEventListener("change", function (){
        if (elem.checked){
            countElements[i].value = 1
        }
        else{
            countElements[i].value = 0
        }
        countsumm()
    })
})

//для каждого элемента checkbox нужно повесить событие на изменение change,
//по которому в объекте должны меняться значение на цену, если чекбокс выбран
//или обратно на 0, если чекбокс не выбран
countElements.forEach((product, i) => {
    product.addEventListener("change", function (){
        pricee = countElements[i].value
        if (+pricee < 0 || pricee[0] === "0" ){
            alert('некорректные данные, введите число больше нуля')
        }
        countsumm()
    })
});
btn.addEventListener("click", function () {
    name = userName.value
    surname = userSurname.value
    total = resultElem.textContent
    alert(`заказчик: ${name} ${surname} \n итого: ${total}`)
})
//по клику на кнопку должен появиться alert с текстом
//(*)для выбравших способ 1 или 2 именно внутри данного события будет происходить подсчет итоговой суммы,
//вам нужно перебрать все элементы checkbox и input в цикле

