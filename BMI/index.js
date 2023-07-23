const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");
const SuggestionE2=document.getElementById("Suggestion");
function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  const bmiValue = weightValue / (heightValue * heightValue);

  bmiInputEl.value = bmiValue;

  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "under Weight";
    SuggestionE2.innerText="Eating healthy food can improve your BMI";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal weight";
    SuggestionE2.innerText="You are perfect make sure to prioritize good sleep and healthy diet";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Overweight";
    SuggestionE2.innerText="Do some exercises that will lead to good health";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "Obesity";
    SuggestionE2.innerText="You are over weight please contact your doctor";
  }
}

btnEl.addEventListener("click", calculateBMI);
