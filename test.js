const input = document.querySelector(".screen");

const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
    input.innerHTML = '0';
});

const array = [];

const one = document.querySelector(".one");
const clickOne = one.addEventListener("click", function () {
    array.push('1');
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", function () {
    let output = array.join("");
    input.innerHTML = output;
});
