let $ = document;
const weightInput = $.querySelector("#weight");
const weightTxt = $.querySelector("#weight-val");
const heightInput = $.querySelector("#height");
const heightTxt = $.querySelector("#height-val");
const bmiNum = $.querySelector("#result");
const resultTxt = $.querySelector("#category");

weightInput.addEventListener("change", bmiCal);
heightInput.addEventListener("change", bmiCal);

function bmiCal() {
  let weightValue = weightInput.value;
  let heightValue = heightInput.value;
  weightTxt.innerHTML = `${weightValue} kg`;
  heightTxt.innerHTML = `${heightValue} cm`;

  let changeCm = heightValue / 100;
  let bmiResult = Math.round(weightValue / (changeCm * changeCm))

  bmiNum.innerHTML = bmiResult;

  if(bmiResult < 18.5){
    bmiNum.style.color = 'orange';
    resultTxt.innerHTML = 'Underweight';
  }else if(bmiResult > 18.5 && bmiResult < 24.9){
    bmiNum.style.color = 'green';
    resultTxt.innerHTML = 'Normal';
  }else if(bmiResult > 25 && bmiResult < 29.5){
    bmiNum.style.color = 'orange';
    resultTxt.innerHTML = 'Overweight';
  }else if(bmiResult > 29.5){
    bmiNum.style.color = 'red';
    resultTxt.innerHTML = 'Obese';
  };
};
