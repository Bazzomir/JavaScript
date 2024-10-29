class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '' && this.previousOperand === '') return;

        if (this.currentOperand === '') {
            this.operation = operation;
            this.updateDisplay();
            return;
        }

        if (this.previousOperand !== '') {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;

        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = '';
        }
    }
}

// Selectors
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

// Calculator instance
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// Helper Functions
function handleClear() {
    calculator.clear();
    calculator.updateDisplay();
}

function handleDelete() {
    calculator.delete();
    calculator.updateDisplay();
}

function handleEquals() {
    calculator.compute();
    calculator.updateDisplay();
}

function handleNumberInput(input) {
    calculator.appendNumber(input);
    calculator.updateDisplay();
}

function handleOperationInput(operation) {
    calculator.chooseOperation(operation);
    calculator.updateDisplay();
}

// Button Event Listeners
numberButtons.forEach(button => {
    button.addEventListener('click', () => handleNumberInput(button.innerText));
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => handleOperationInput(button.innerText));
});

equalsButton.addEventListener('click', handleEquals);
allClearButton.addEventListener('click', handleClear);
deleteButton.addEventListener('click', handleDelete);

// Keyboard Support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        handleNumberInput(e.key);
    } else if (e.key === '.') {
        handleNumberInput('.');
    } else if (e.key === '=' || e.key === 'Enter') {
        handleEquals();
    } else if (e.key === 'Backspace') {
        handleDelete();
    } else if (e.key === 'Escape' || e.key === 'r' || e.key === 'R' || e.key === 'Delete') {
        handleClear();
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        let operation;
        switch (e.key) {
            case '+':
                operation = '+';
                break;
            case '-':
                operation = '-';
                break;
            case '*':
                operation = '*';
                break;
            case '/':
                operation = '÷';
                break;
        }
        handleOperationInput(operation);
    }
});

const switchInput = document.querySelector('.box__switch input[type="checkbox"]');
const scientificButtons = document.querySelector('.box__buttons--scientific');

switchInput.addEventListener('change', () => {
    scientificButtons.classList.toggle('active', switchInput.checked);
});
