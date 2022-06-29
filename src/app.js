/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  setInterval(randomCard, 3000);
  function randomCard() {
    let numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suits = ["♦", "♥", "♠", "♣"];
    let randNum = Math.floor(Math.random() * numbers.length);
    document.querySelector(".number").innerText = numbers[randNum];
    console.log(randNum);
    let randSuits = Math.floor(Math.random() * suits.length);
    document.querySelector(".top-suit").innerText = suits[randSuits];
    document.querySelector(".bottom-suit").innerText = suits[randSuits];
    if (suits[randSuits] == "♦" || suits[randSuits] == "♥") {
      document.querySelector(".top-suit").classList.add("red");
      document.querySelector(".bottom-suit").classList.add("red");
      document.querySelector(".number").classList.add("red");
    } else {
      document.querySelector(".top-suit").classList.remove("red");
      document.querySelector(".bottom-suit").classList.remove("red");
      document.querySelector(".number").classList.remove("red");
    }
  }
};
