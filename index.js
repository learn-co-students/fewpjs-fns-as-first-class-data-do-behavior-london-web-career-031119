/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string) {
  let hour = parseInt(string.split(":")[0])
  if (hour<12) {
    return "Good Morning"
  } else if (hour>16){
      return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(string) {
  document.getElementById("greeting").textContent = string;
}
