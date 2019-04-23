/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  time = time.split(":")
  if (time[0] <= 12) {
    return "Good Morning";
  }
  if (time[0] >= 17) {
    return "Good Evening";
  } else
  return "Good Afternoon";
}

function displayMessage(string) {
  // greeting = document.querySelector('#greeting')
  // greeting.innerText = string
  document.getElementById("greeting").textContent = string
}