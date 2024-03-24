const paragraph = [
  "The sun rose gently ",
  "over the horizon, casting ",
  "a warm glow across ",
  "the landscape. Birds chirped ",
  "happily as they flitted ",
  "from tree to tree, ",
  "their cheerful melodies ",
  "filling the air. the ",
  "the scent of fresh ",
  "flowers. In the distance, ",
  "a babbling brook meandered ",
  "through the meadow, its ",
  "clear waters glistening in ",
  "the morning light. The ",
  "grass swayed gently in, ",
  "the wind, creating a ",
  "mesmerizing dance of green ",
  "and gold. As the day began in earnest, ",
  "people emerged from their ",
  "homes, ready to embrace the ",
  "opportunities that lay ahead. ",
  "It was a peaceful scene, a snapshot ",
  "of nature's beauty and harmony. ",
  "And as the world awakened to a new day, ",
  "there was a sense of hope and possibility in the air. ",
];
const paraBox = document.querySelector(".para");
const typeSpace = document.querySelector(".typeSpace");
const keyCodeMap = { 32: " ", 190: ".", 188: "," };
const wpm = document.querySelector(".wpmin");
const wrongCount = document.querySelector("#wrongCount");
const cpm = document.querySelector("#cpm");
const start = document.querySelector(".start");
const len = paragraph.length;
const reloadChar = new Set();

// for (let i = 0; i < len; i++) {
//   paraBox.innerHTML =
//     paraBox.innerHTML + `<span class="text${i}">${paragraph[i]}</span>`;
// }

var i = 0;
var shiftPressed = false;
var wrongPresent = false;
let wordCount = 0;
let wrongLetCount = 0;
const spaceSet = new Set();
let totalWordCount = 0;
paraLoader(0, 0);
let intervalId = null;
typeSpace.addEventListener("keydown", (e) => {
  //to load paragraph

  console.log(e.keyCode);

  //   let inputText = i >= 1 ? e.target.value.slice(-1) : e.target.value;
  let inputText = keyCodeMap.hasOwnProperty(e.keyCode)
    ? keyCodeMap[e.keyCode]
    : String.fromCharCode(shiftPressed ? e.keyCode : e.keyCode + 32);
  console.log(inputText);
  let currText = document.querySelector(`.text${i}`);
  //backspace
  if (e.keyCode == 8) {
    if (spaceSet.has(i - 1)) return;
    let removeStyle = document.querySelector(`.text${i > 0 ? i - 1 : 0}`);
    removeStyle.classList.remove("letterCorrect");
    wrongLetCount = removeStyle.classList.contains("letterWrong")
      ? wrongLetCount - 1
      : wrongLetCount;
    wrongPresent = !(wrongLetCount == 0);
    removeStyle.classList.remove("letterWrong");
    i = i > 0 ? i - 1 : 0;
    inputText = paragraph.charAt(i > 0 ? i - 1 : 0);
    currText = document.querySelector(`.text${i > 0 ? i - 1 : 0}`);
  }
  if (
    (e.keyCode <= 90 && e.keyCode >= 65) ||
    e.keyCode == 32 ||
    e.keyCode == 190 ||
    e.keyCode == 16 ||
    e.keyCode == 8 ||
    e.keyCode == 188
  ) {
    if (e.keyCode != 16) {
      let removeLastStyle = document.querySelector(`.text${i > 0 ? i - 1 : i}`);
      try {
        removeLastStyle.classList.remove("letterCorrect");
      } catch (e) {
        console.log("no letter " + e);
      }
      if (inputText === currText.innerHTML) {
        currText.classList.add("letterCorrect");
        //if space comes add word
        if (e.keyCode == 32) {
          if (!wrongPresent) {
            wordCount++;
            wpm.innerHTML = wordCount;
            wrongLetCount = 0;
            spaceSet.add(i);
            typeSpace.value = ""; //to empty input
          } else {
            wrongCount.innerHTML = parseInt(wrongCount.innerHTML) + 1;
            wrongPresent = !wrongPresent;
          }
          totalWordCount++;
        }
      } else if (inputText !== currText.innerHTML) {
        if (inputText !== " " && currText.textContent == " ") return;
        currText.classList.add("letterWrong");
        wrongLetCount++;
        wrongPresent = true;
      }
      i = e.keyCode != 8 ? i + 1 : i;
      cpm.innerHTML = i;
      shiftPressed = false;
    } else {
      shiftPressed = true;
    }
  }
  if (reloadChar.has(i)) {
    paraLoader(totalWordCount, i);
  }
});


async function getTimer() {
  clearInterval(intervalId);
  let time = ["0", "1", ":", 5, 9];
  let stringSec = "60";
  intervalId = setInterval(function () {
    stringSec = stringSec - 1;
    time[3] = parseInt(stringSec / 10);
    time[4] = parseInt(stringSec % 10);
    time[1] = "0";
    document.getElementById("countDown").innerHTML = time.join("");
    if (stringSec <= 0) {
      clearInterval(intervalId);
      typeSpace.disabled = true;
    }
  }, 1000);
}

//i shoudld be right word count + wrong word count;
//charaPosition is the last position of the charector;
function paraLoader(i, charaPosition) {
  paraBox.innerHTML = "";
  let currParagraph = paragraph[reloadChar.size];
  let lenCurrPara = currParagraph.length;
  for (let i = 0; i < lenCurrPara; i++) {
    paraBox.innerHTML += `<span class="text${i + charaPosition}">${
      currParagraph[i]
    }</span>`;
  }
  reloadChar.add(charaPosition + lenCurrPara);
}

start.addEventListener("click", () => {
  reloadChar.clear();
  typeSpace.disabled = false;
  typeSpace.focus();
  typeSpace.value = "";
  getTimer();
  i = 0;
  i = 0;
  shiftPressed = false;
  wrongPresent = false;
  wordCount = 0;
  wrongLetCount = 0;
  totalWordCount = 0;
  paraLoader(0, 0);
  wpm.innerHTML = 0;
  cpm.innerHTML = 0;
  wrongCount.innerHTML = 0;
});
