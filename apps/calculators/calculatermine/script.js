const buttons = document.querySelectorAll(".buttons > button");
const inpConsole = document.getElementById("inpConsole");
const upperDisplay = document.getElementById("upDisplay");

let fullStopClicked = false;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {

    if (buttons[i].innerHTML == "AC"){
        inpConsole.value = "";
        upperDisplay.value = "";
    }

    if (buttons[i].innerHTML == "DEL") {
        let inpVa = inpConsole.value;
        let lastChar = inpVa.charAt(inpVa.length - 1);
        inpVa = inpVa.slice(0,-1);
        inpConsole.value = inpVa; 
        if (lastChar == ".") {fullStopClicked = false;}
    }

    if (!isNaN(buttons[i].innerHTML/10)) {
      inpConsole.value = inpConsole.value + buttons[i].innerHTML;
    }

    if (!fullStopClicked && buttons[i].innerHTML == "."){
        inpConsole.value = inpConsole.value + buttons[i].innerHTML;
        fullStopClicked = true;
    }

    if ("+-÷*".includes(buttons[i].innerHTML)){
        const res = calculate();
        if (res != "Error"){
        upperDisplay.value = res + buttons[i].innerHTML;
        inpConsole.value = "";}
        fullStopClicked = false;
    }

    if (buttons[i].innerHTML == "="){
        inpConsole.value = calculate();
        upperDisplay.value = "";
        fullStopClicked = inpConsole.value.includes(".");
    }
    
  });
}

function calculate() {
    const expression = (upperDisplay.value + inpConsole.value).replaceAll("÷","/");
    try{
        return eval(expression);
    } catch (error) {
        return "Error";
    }
}
