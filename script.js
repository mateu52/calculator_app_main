const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

let currentOperand = ''
let previousOperand = ''
const operation = undefined

const actualizSum = () => {
    currentOperandTextElement.innerText = currentOperand
    previousOperandTextElement.innerText = previousOperand
}

const addNumber = (number) => {
    currentOperand = currentOperand.toString() + number.toString()
}

numberButtons.forEach((number) => {
    number.addEventListener('click', () => {
        addNumber(number.innerText)
        actualizSum()
    })
})