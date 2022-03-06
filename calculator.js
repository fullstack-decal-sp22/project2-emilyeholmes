let total = 0;
let strbuffer = "0";
let oldOperator = "";

function displayNum(clickedval) {
    console.log(clickedval);
    if (strbuffer === "0") {
        strbuffer = clickedval;
    } else {
        strbuffer += clickedval;
    }
    document.querySelector(".result-screen").innerHTML = strbuffer;
}

function clearScreen() {
    strbuffer = "0";
    total = 0;
    document.querySelector(".result-screen").innerHTML = strbuffer;
}

function calculations(operator) {
    const intBuffer = parseInt(strbuffer);
    if (total != 0) {
        if (oldOperator === "+") {
            total += intBuffer;
        } else if (oldOperator === "÷") {
            total = (total / intBuffer).toFixed(10);
        } else if (oldOperator === "x") {
            total *= intBuffer;
        } else if (oldOperator === "-") {
            total -= intBuffer;
        }
        strbuffer = "0";
    } else {
        total = intBuffer;
        oldOperator = operator;
        strbuffer = "0";
        document.querySelector(".result-screen").innerHTML = strbuffer;
    }
}

function backspace() {
    strbuffer = strbuffer.substring(0, strbuffer.length - 1);
    document.querySelector(".result-screen").innerHTML = strbuffer;
}

function equals() {
    calculations(oldOperator);
    strbuffer = total.toString();
    document.querySelector(".result-screen").innerHTML = total;
    total = 0; 
}


function setListeners() {
    console.log('setting listeners');
    let buttons = document.querySelectorAll(".buttons"); 
    for (item of buttons) {
        if (item.innerText === "=") {
            item.addEventListener("click", function() {
                equals();
            });
        } else if (item.getAttribute("id") === "last-buttons") {
            item.addEventListener("click", function(e) {
                calculations(e.target.innerText);
            });
        } else if (item.innerText === "←") {
            item.addEventListener("click", function() {
                backspace();
            }); 
        }
        else if (item.getAttribute('id') === "c-button") {
            item.addEventListener("click", function() {
                clearScreen();
            }); 
        } else {
            item.addEventListener("click", function(e) {
                displayNum(e.target.innerText);
            });
        }
    }
}

setListeners();
