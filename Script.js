
let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        let btnText = b.target.innerText;

        if (btnText == '=') {
            try {
                string = eval(string).toString();
            } catch {
                string = "Error";
            }
            inputBox.value = string;
        }
        else if (btnText == 'AC') {
            string = '';
            inputBox.value = string;
        } 
        else if (btnText == 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        } 
        else if (b.target.id == 'plusminus' || btnText === '±' || btnText === '±') {
            if (string) {
                if (string[0] === '-') {
                    string = string.substring(1);
                } else {
                    string = '-' + string;
                }
                inputBox.value = string;
            }
        }
        else {
            string += btnText;
            inputBox.value = string;
        }
    });
});