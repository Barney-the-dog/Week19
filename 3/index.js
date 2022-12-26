

let btnPlus = document.querySelector('.plus')
let btnMinus = document.querySelector('.minus')
let btnDivide = document.querySelector('.divide')
let btnMultiply = document.querySelector('.multiply')
 


let inputs = document.querySelectorAll('input')

class Calculator {
    static plus(inputs) {
        if (inputs[0].value != '' && inputs[1].value != '') {
            return Number(inputs[0].value) + Number(inputs[1].value)
        } else {
            return 'введите число'
        }
    }    

    static minus(inputs) {
        if (inputs[0].value != '' && inputs[1].value != '') {
            return Number(inputs[0].value) - Number(inputs[1].value)
        } else {
            return 'введите число'
        }  
    }

    static multiply(inputs) {
        if (inputs[0].value != '' && inputs[1].value != '') {
            return Number(inputs[0].value) * Number(inputs[1].value)
        } else {
            return 'введите число'
        }  
    }

    static divide(inputs) {
        if (inputs[0].value != '' && !Number(inputs[1].value) && inputs[1].value == 0) {
            return 'На ноль нельзя делить'
        } else if (inputs[0].value != '' && inputs[1].value != '') {
            return Number(inputs[0].value) / Number(inputs[1].value)
        } else {
            return 'введите число'
        }
    }
}

btnPlus.addEventListener('click', function() {
    let result = Calculator.plus(inputs)
    document.getElementById('result').innerHTML = result;
})

btnMinus.addEventListener('click', function() {
    let result = Calculator.minus(inputs)
    document.getElementById('result').innerHTML = result;
})

btnMultiply.addEventListener('click', function() {
    let result = Calculator.mult(inputs)
    document.getElementById('result').innerHTML = result;
})

btnDivide.addEventListener('click', function() {
    let result = Calculator.divide(inputs)
    document.getElementById('result').innerHTML = result;
})

