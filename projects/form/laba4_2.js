btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
firstname = document.querySelector('[name="nname"]');
secondname = document.querySelector('[name="ssurename"]')

btnElement.addEventListener("click", function (){
    resultElement.textContent = `Здравствуйте, ${firstname.value} ${secondname.value}!`
});