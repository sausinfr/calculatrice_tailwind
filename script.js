let touche = document.querySelectorAll("button");
let display = document.querySelector("#result");

function remiseZero() {
    display.textContent = "0";
}

function displayValue(value){
    if (display.textContent == "0") {
        display.textContent = "";
    }
    display.textContent += value;
}

function calculResultat() {
    let equation = display.textContent;
    let resolu = Function("return " + equation)();
    display.textContent = resolu;
}

function backSpace() {
    let str = display.textContent;
    str = str.substring(0, str.length-1);
    console.log(str);
    if (str == "") {
        display.textContent = 0;
    } else {
        display.textContent = str;
    }
}

for (let i = 0; i < touche.length; i++) {
    touche[i].addEventListener("click", () => {
            switch (touche[i].value) {
                case "reset" :
                    remiseZero();
                    break;
                case "del" :
                    backSpace();
                    break;
                case "=" :
                    calculResultat();
                    break;
                default :
                    displayValue(touche[i].value);
            }
    });
}