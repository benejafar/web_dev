const paragraph =
  "The big brown dog barks loudly. Children play happily in the park. Sun shines bright. Birds sing sweetly. Flowers bloom. Trees sway gently. Happiness fills air. Peaceful moments. ";
const paraBox = document.querySelector(".para");
const typeSpace = document.querySelector(".typeSpace");
const keyCodeMap = { 32: " ", 190: ".", 188: "," };

const len = paragraph.length;

for (let i = 0; i < len; i++) {
  paraBox.innerHTML =
    paraBox.innerHTML + `<span class="text${i}">${paragraph[i]}</span>`;
}

typeSpace.addEventListener("click", () => {
  typeSpace.value = "";
});

var i = 0;
var shiftPressed = false;
typeSpace.addEventListener("keydown", (e) => {
  console.log(e.keyCode);

  //   let inputText = i >= 1 ? e.target.value.slice(-1) : e.target.value;
  let inputText = keyCodeMap.hasOwnProperty(e.keyCode)
    ? keyCodeMap[e.keyCode]
    : String.fromCharCode(shiftPressed ? e.keyCode : e.keyCode + 32);
  console.log(inputText);
  let prevText = document.querySelector(`.text${i}`);
  if (e.keyCode == 8){
    let removeStyle = document.querySelector(`.text${i>0?i-1:i}`)
    removeStyle.classList.remove("letterCorrect");
    removeStyle.classList.remove("letterWrong");
    i--;
    inputText = paragraph.charAt(i>0?i-1:i);
    prevText = document.querySelector( `.text${i>0?i-1:i}`);
  }
  if (
    (e.keyCode <= 90 && e.keyCode >= 65) ||
    e.keyCode == 32 ||
    e.keyCode == 190 ||
    e.keyCode == 16 || e.keyCode == 8
  ) {
    if (e.keyCode != 16) {
      let removeLastStyle = document.querySelector(`.text${i>0?i-1:i}`);
      removeLastStyle.classList.remove("letterCorrect")
      if (inputText === prevText.innerHTML)
        prevText.classList.add("letterCorrect");
      else if (inputText !== prevText.innerHTML)
        prevText.classList.add("letterWrong");
      i = e.keyCode != 8 ? i + 1 : i;
      shiftPressed = false;
    } else {
      shiftPressed = true;
    }
  } 
});

// console.log('a'.charCodeAt(0) -32);
