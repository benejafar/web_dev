const demo = document.getElementById("demo");

const valueInput = document.querySelectorAll("input[type = 'number']");
const rangeInput = document.querySelectorAll("input[type='range']");
const rangeSpace = document.querySelector(".range-container .range-space");

const gap = 500;

//for changing width of inner green
// rangeSpace.style.marginLeft = (rangeInput[0].value/rangeInput[0].max) * 100 + "%";
//         rangeSpace.style.width = ((rangeInput[1].value-rangeInput[0].value)/rangeInput[0].max) * 100 + "%";

for (let i = 0; i < valueInput.length; i++) {
  valueInput[i].addEventListener("change", (e) => {
    className = e.target.className;
    rangeInput[i].value = valueInput[i].value;
    minVal = parseInt(valueInput[0].value);
    maxVal = parseInt(valueInput[1].value);

    if (minVal < 0 ){
        alert("min value cannot be less than zero");
        minVal = 0;
        valueInput[0].value = 0;
    }

    if (maxVal > 10000 ){
        alert("max value cannot be greater than 10000");
        maxVal = 10000;
        valueInput[1].value = 10000;
    }

    
    if (maxVal - minVal < gap){
        if (className == "min-input") {
            valueInput[0].value = maxVal-gap;
            rangeInput[0].value = maxVal-gap;
        }else {
            valueInput[1].value = minVal + gap;
            rangeInput[1].value = minVal + gap;
        }
    }
    rangeSpace.style.marginLeft =
      (rangeInput[0].value / rangeInput[0].max) * 100 + "%";
    rangeSpace.style.width =
      ((rangeInput[1].value - rangeInput[0].value) / rangeInput[0].max) * 100 +
      "%";
    
    // rangeInput[0].value = minVal;
    // rangeInput[1].value = maxVal;
  });

  for (let j = 0; j < rangeInput.length; j++) {
    rangeInput[j].addEventListener("input", (e) => {

      minRange = parseInt(rangeInput[0].value);
      maxRange = parseInt(rangeInput[1].value);


      if (maxRange - minRange < gap){
        if (j == 0) {
            valueInput[0].value = maxRange-gap;
            rangeInput[0].value = maxRange-gap;
        }else {
            valueInput[1].value = minRange + gap;
            rangeInput[1].value = minRange + gap;
        }
    }

      valueInput[i].value = rangeInput[i].value;
      rangeSpace.style.marginLeft =
        (rangeInput[0].value / rangeInput[0].max) * 100 + "%";
      rangeSpace.style.width =
        ((rangeInput[1].value - rangeInput[0].value) / rangeInput[0].max) *
          100 +
        "%";
    });

    rangeInput[j].addEventListener("change", (e) => {
        valueInput[i].value = rangeInput[i].value;
        rangeSpace.style.marginLeft =
          (rangeInput[0].value / rangeInput[0].max) * 100 + "%";
        rangeSpace.style.width =
          ((rangeInput[1].value - rangeInput[0].value) / rangeInput[0].max) *
            100 +
          "%";
      });
  }
}
