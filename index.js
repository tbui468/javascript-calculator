//add, subtrac, multiply, divide functions
//operate function that takes one of the above and two numbers
//  see display notes below about how to save these numbers/arithmetic value
//display it (need previous number AND update number user is currently entering, and arithmetic button user pushed)
//once all above is complete, read the gotches on Odin project to finish smaller stuff

//main container
const container = document.querySelector("#container");
container.style.cssText = "border: 1px solid red; width: 100%; height: 100%;";

//title
const title = document.createElement("h1");
title.textContent = "Calculator";
title.style.cssText = "display: block; border: 1px solid red; background-color: blue; text-align: center;";

//frame
const frame = document.createElement("div");
frame.style.cssText = "display: block; border: 1px solid red; background-color: green; width: 25%; margin: 0 auto; ";

//display
const display = document.createElement("div");
display.style.cssText = "width: 100%; height: 100px; border: 1px solid black; background-color: gray; margin: 0px;";

//button row inside frame
const rowCSSText = "width: 100%; height: 100px; border: 1px solid black; background-color: pink; margin: 0px;";

const mathRow = document.createElement("div");
mathRow.style.cssText = rowCSSText;
mathRow.appendChild(createNumberButton("+"));
mathRow.appendChild(createNumberButton("-"));
mathRow.appendChild(createNumberButton("x"));
mathRow.appendChild(createNumberButton("/"));

//numbers 1, 2, 3
const numberRow0 = document.createElement("div");
numberRow0.style.cssText = rowCSSText;
numberRow0.appendChild(createNumberButton(1));
numberRow0.appendChild(createNumberButton(2));
numberRow0.appendChild(createNumberButton(3));

const numberRow1 = document.createElement("div");
numberRow1.style.cssText = rowCSSText;
numberRow1.appendChild(createNumberButton(4));
numberRow1.appendChild(createNumberButton(5));
numberRow1.appendChild(createNumberButton(6));

const numberRow2 = document.createElement("div");
numberRow2.style.cssText = rowCSSText;
numberRow2.appendChild(createNumberButton(7));
numberRow2.appendChild(createNumberButton(8));
numberRow2.appendChild(createNumberButton(9));

const finalRow = document.createElement("div");
finalRow.style.cssText = rowCSSText;
finalRow.appendChild(createNumberButton(0));
finalRow.appendChild(createNumberButton("="));
finalRow.appendChild(createNumberButton("clear"));

function createNumberButton(num) {
  let button = document.createElement("div");
  button.style.cssText = "display: inline-block; width: 100px; height: 100%; border: 1px solid black;";
  button.textContent = num;
  return button;
}

frame.appendChild(display);
frame.appendChild(mathRow);
frame.appendChild(numberRow0);
frame.appendChild(numberRow1);
frame.appendChild(numberRow2);
frame.appendChild(finalRow);

container.appendChild(title);
container.appendChild(frame);
