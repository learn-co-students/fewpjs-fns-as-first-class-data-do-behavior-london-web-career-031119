function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
  if (parseInt(time) < 12) {
    return "Good Morning"
  }
  else if (parseInt(time) >= 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(msg) {
  document.querySelector("#greeting").textContent = msg
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
