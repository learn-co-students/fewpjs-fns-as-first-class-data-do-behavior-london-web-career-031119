/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string){
  let parsedNumber = parseInt(string)
  if (parsedNumber > 1 && parsedNumber < 12) {
    return "Good Morning"
  }
  if (parsedNumber >= 12 && parsedNumber <= 17) {
    return "Good Afternoon"
  }
  if (parsedNumber > 17 && parsedNumber < 24) {
    return "Good Evening"
  }

}
/* Write your implementation of displayMessage() */

function displayMessage(string){
  document.querySelector("#greeting").textContent = string
}
