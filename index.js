/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function displayMessage(msg) {
  document.getElementById("greeting").textContent = msg;

}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time){

const thistime = parseInt(time, 10);
if(thistime < 12) return "Good Morning"
if(thistime > 18) return "Good Evening"
return "Good Afternoon"
}
