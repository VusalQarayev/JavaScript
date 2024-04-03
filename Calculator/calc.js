document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.but, .brut');
    const input = document.querySelector('.ipt');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('number') || button.classList.contains('decimal')) {
                input.value += button.textContent;
            } else if (button.classList.contains('clear')) {
                input.value = '';
            } else if (button.classList.contains('backspace')) {
                input.value = input.value.slice(0, -1);
            } else if (button.classList.contains('operator')) {
                input.value += ` ${button.textContent} `;
            } else if (button.classList.contains('equal')) {
                try {
                    input.value = calculate(input.value);
                } catch (error) {
                    input.value = 'Error';
                }
            }
        });
    });

    function calculate(expression) {
        const tokens = expression.split(' ');
        let result = parseFloat(tokens[0]);

        for (let i = 1; i < tokens.length; i += 2) {
            const operator = tokens[i];
            const operand = parseFloat(tokens[i + 1]);

            if (isNaN(operand)) {
                throw 'Invalid expression';
            }

            switch (operator) {
                case '+':
                    result += operand;
                    break;
                case '-':
                    result -= operand;
                    break;
                case '*':
                    result *= operand;
                    break;
                case '/':
                    if (operand === 0) {
                        throw 'Division by zero';
                    }
                    result /= operand;
                    break;
                default:
                    throw 'Unknown operator';
            }
        }

        return result;
    }
})