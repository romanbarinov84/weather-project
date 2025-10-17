import { showError } from "../components/error.js";
const cityInput = document.querySelector(".city-input");


export function isCyrillic(text) {
  const cyrillicPattern = /^[А-Яа-яЁё\s-]+$/;
  return cyrillicPattern.test(text);
}

cityInput.addEventListener("input",() => {
    const inputValue = cityInput.value;

    if(inputValue && !isCyrillic(inputValue)){
        showError("Введите на кирилице");
    }else{
        showError("");
    }
})