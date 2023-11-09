// function act1() {
//     var textArea = document.getElementById("act1").value;
//     var result1 = document.getElementById("result1");
//     var result2 = document.getElementById("result2")
//     var con1 = document.getElementById("con1");
//     var con2 = document.getElementById("con2");
//     textArea = textArea.replace(/\s/g, '');

//     if (textArea.includes('<h1>') && textArea.includes('</h1>')) {
//         result1.innerHTML = "Correct"+con1.textContent;
//     } else {
//         result1.innerHTML = "Wrong"+con1.textContent;
//     }

//     if (textArea.includes('<p>') && textArea.includes('<p>')){
//         result2.innerHTML = "Correct"+con2.textContent;
//     } else {
//         result2.innerHTML = "Wrong"+con2.textContent;
//     }
// };

class Validator {
    constructor() {
        this.textArea = document.getElementById("act1");
        this.result1 = document.getElementById("result1");
        this.result2 = document.getElementById("result2");
        this.con1 = document.getElementById("con1");
        this.con2 = document.getElementById("con2");
        
    }

    validate() {
        const textAreaValue = this.textArea.value.replace(/\s/g, '');
        if (textAreaValue.includes('<h1>') && textAreaValue.includes('</h1>')) {
            this.result1.innerHTML = "Correct" + this.con1.textContent;
        } else {
            this.result1.innerHTML = "Wrong" + this.con1.textContent;
        }

        if (textAreaValue.includes('<p>') && textAreaValue.includes('</p>')) {
            this.result2.innerHTML = "Correct" + this.con2.textContent;
        } else {
            this.result2.innerHTML = "Wrong" + this.con2.textContent;
        }
    }
}

const validator = new Validator();

document.getElementById("checkButton").addEventListener("click", () => {
    validator.validate();
});

// <h1> asda </h1>
//<p> asdas </p>

