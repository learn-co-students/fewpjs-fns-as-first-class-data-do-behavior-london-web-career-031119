/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let t = parseInt(time.slice(0,2))
  console.log(t)
  if (t < 12) { return "Good Morning" }
    else if (t > 17) { return "Good Evening" }
    else { return "Good Afternoon" }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let h1 = document.querySelector('h1#greeting')
  h1.textContent = string
}