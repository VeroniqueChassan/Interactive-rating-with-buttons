const input = document.querySelectorAll(".buttons-grades");
const formSubmit = document.querySelector("#form-container");
const result = document.querySelector("#result");
const thankyouContainer = document.querySelector("#thankyou-container");

//click on a number and save its value + change the color of the button clicked

input.forEach((grade) => {
  grade.addEventListener("click", (e) => {
    e.preventDefault();

    /* L14 + l15 fait par David ! a retenir */
    input.forEach((grade) => {
      grade.removeAttribute("style");
    });

    const chosenGrade = grade.value;
    result.innerHTML = chosenGrade + " ";

    const chosenInput = grade;
    chosenInput.style.backgroundColor = "rgb(239, 106, 4)";
    chosenInput.style.color = "white";
  }); //end add event listener
}); //end forEach

//button clicked changes color
formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  showThankyou();
  hideHello();
});

//onclick submit move class thankyou shows and class hide happen
//thank you show the value selected by pushing into a span
function showThankyou() {
  thankyouContainer.classList.add("show");
}

function hideHello() {
  formSubmit.classList.add("hide");
}
