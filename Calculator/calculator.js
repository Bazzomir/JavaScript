class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.isLocked = false;
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
        if(this.isLocked) return;
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
        if (isNaN(prev) || (isNaN(current) && !['sin', 'cos', 'tan', 'cot', 'sqrt', 'log', 'exp', 'pi', 'e'].includes(this.operation))) return;

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
            case 'sin':
                computation = Math.sin(current * (Math.PI / 180));
                break;
            case 'cos':
                computation = Math.cos(current * (Math.PI / 180));
                break;
            case 'tan':
                computation = Math.tan(current * (Math.PI / 180));
                break;
            case 'cot':
                computation = 1 / Math.tan(current * (Math.PI / 180));
                break;
            case 'sqrt':
                computation = Math.sqrt(current);
                break;
            case 'log':
                computation = Math.log10(current);
                break;
            case 'exp':
                computation = Math.exp(current);
                break;
            case 'pi':
                computation = Math.PI;
                break;
            case 'e':
                computation = Math.E;
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

    handleScientificFunction(func) {
        this.chooseOperation(func);
        this.compute();
        this.updateDisplay();
    }
}

// Selectors
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const scientificButtons = document.querySelectorAll('[data-function]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

// Calculator instance
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// Helper Functions
function handleClear() {
    calculator.clear();
    calculator.updateDisplay();
    calculator.isLocked = false;
}

function handleDelete() {
    calculator.delete();
    calculator.updateDisplay();
}

function handleEquals() {
    calculator.compute();
    calculator.updateDisplay();
    calculator.isLocked = true;
}

function handleNumberInput(input) {
    calculator.appendNumber(input);
    calculator.updateDisplay();
}

function handleOperationInput(operation) {
    calculator.chooseOperation(operation);
    calculator.updateDisplay();
    calculator.isLocked = false;
}

function handleScientificInput(func) {
    calculator.handleScientificFunction(func);
    calculator.isLocked = false;
}

// Button Event Listeners
numberButtons.forEach(button => {
    button.addEventListener('click', () => handleNumberInput(button.innerText));
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => handleOperationInput(button.innerText));
});

scientificButtons.forEach(button => {
    button.addEventListener('click', () => handleScientificInput(button.getAttribute('aria-label')));
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
    } else if (e.key === '^') {
        handleOperationInput('^');
    } else if (e.key === '%') {
        handleOperationInput('%');
    } else if (e.key === '!') {
        calculator.handleScientificFunction('factorial');
    } else if (e.key === 'e' || e.key === 'E') {
        calculator.handleScientificFunction('e');
    } else if (e.key === '(') {
        handleNumberInput('(');
    } else if (e.key === ')') {
        handleNumberInput(')');
    }
});

// Scientific toggle button listener
const switchInput = document.querySelector('.box__switch input[type="checkbox"]');
const calculatorBoxButton = document.querySelector('.box__buttons');
const scientificContainer = document.querySelector('.box__buttons--scientific');
const calculatorBox = document.querySelector('.calculator__box');

function toggleScientificMode() {
    scientificContainer.classList.toggle('active', switchInput.checked);

    if (!switchInput.checked) {
        calculatorBox.style.width = '366px';
        calculatorBoxButton.style.justifyContent = 'center';
    } else {
        calculatorBox.style.width = '700px';
        calculatorBoxButton.style.justifyContent = 'space-between';
    }
}

switchInput.addEventListener('change', toggleScientificMode);

