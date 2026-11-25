const button = document.querySelector("#count-button");
const result = document.querySelector("#result");

let count = 0;

button.addEventListener("click", () => {
  count = count + 1;
  result.textContent = `버튼을 ${count}번 눌렀어요.`;
});
