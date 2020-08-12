/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
 const x = time.split(":");
 const num = Number(x[0]);
 if (num < 12) {return "Good Morning";}
 else if (num >= 12 && num <= 16) {return "Good Afternoon";}
 else {return "Good Evening";}
}


function displayMessage(message) {
  const x = document.querySelector("h1#greeting");
  x.innerHTML = `${message}`;



}




/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
