const input = document.querySelector(".screen");

const array = [];
let num1 = "";
let num2 = "";
let result = "";
let operation = ""

const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
    array.length = 0;
    num1 = "";
    num2 = "";
    result = "";
    operation = ""
    input.innerHTML = '0';
});

const one = document.querySelector(".one");
const clickOne = one.addEventListener("click", function () {
    array.push('1')
    input.innerHTML = array.join("");
});

const two = document.querySelector(".two");
two.addEventListener("click", function () {
    array.push('2')
    input.innerHTML = array.join("");
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", function () {
    num2 = array.join("");
    array.length = 0;

    if (operation === "+") {
        result = addition(num1, num2);
        input.innerHTML = result;
    } else if (operation === "-") {
        result = subtraction(num1, num2);
        input.innerHTML = result;
    } else if (operation === "*") {
        result = multiplication(num1, num2);
        input.innerHTML = result;
    } else if (operation === "/") {
        result = division(num1, num2);
        input.innerHTML = result;
    }

});

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", function () {
    array.pop();
    input.innerHTML = array.join("");
});



const zero = document.querySelector(".zero");
zero.addEventListener("click", function () {
    array.push('0')
    input.innerHTML = array.join("");
});

const three = document.querySelector(".three");
three.addEventListener("click", function () {
    array.push('3')
    input.innerHTML = array.join("");
});

const four = document.querySelector(".four");
four.addEventListener("click", function () {
    array.push('4')
    input.innerHTML = array.join("");
});

const five = document.querySelector(".five");
five.addEventListener("click", function () {
    array.push('5')
    input.innerHTML = array.join("");
});

const six = document.querySelector(".six");
six.addEventListener("click", function () {
    array.push('6')
    input.innerHTML = array.join("");
});

const seven = document.querySelector(".seven");
seven.addEventListener("click", function () {
    array.push('7')
    input.innerHTML = array.join("");
});

const eight = document.querySelector(".eight");
eight.addEventListener("click", function () {
    array.push('8')
    input.innerHTML = array.join("");
});

const nine = document.querySelector(".nine");
const clickNine = nine.addEventListener("click", function () {
    array.push('9')
    input.innerHTML = array.join("");
});

const plus = document.querySelector(".plus");
plus.addEventListener("click", function () {
    num1 = array.join("");
    array.length = 0;
    operation = "+";
    input.innerHTML = num1;
});

const minus = document.querySelector(".minus");
minus.addEventListener("click", function () {
    num1 = array.join("");
    array.length = 0;
    operation = "-";
    input.innerHTML = num1;
});

const times = document.querySelector(".times");
times.addEventListener("click", function () {
    num1 = array.join("");
    array.length = 0;
    operation = "*";
    input.innerHTML = num1;
});

const divide = document.querySelector(".divide");
divide.addEventListener("click", function () {
    num1 = array.join("");
    array.length = 0;
    operation = "/";
    input.innerHTML = num1;
});


function addition(string1, string2) {
    let addSum = parseInt(string1) + parseInt(string2);
    return addSum;
}

function subtraction(string1, string2) {
    let subSum = parseInt(string1) - parseInt(string2);
    return subSum;
}

function multiplication(string1, string2) {
    let multSum = parseInt(string1) * parseInt(string2);
    return multSum;
}

function division(string1, string2) {
    let divSum = parseInt(string1) / parseInt(string2);
    return divSum;
}
