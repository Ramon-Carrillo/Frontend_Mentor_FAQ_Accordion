const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const answer1 = document.getElementById("answer1");
const answers = document.querySelectorAll(".answer");

plus.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("plus")) {
      item.classList.remove("plus");
      item.classList.add("minus");
      item.nextElementSibling.style.display = "block";

      answers.forEach((answer) => {
        if (answer.previousElementSibling.contains(item)) {
          answer.style.display = "block";
        }
      });
    }
  });
});

minus.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("minus")) {
      item.previousElementSibling.classList.remove("minus");
      item.previousElementSibling.classList.add("plus");
      item.style.display = "none";

      answers.forEach((answer) => {
        if (answer.previousElementSibling.contains(item)) {
          answer.style.display = "none";
        }
      });
    }
  });
});
