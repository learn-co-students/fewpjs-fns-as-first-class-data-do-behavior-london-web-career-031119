/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

function greet(arg) {
  const time = parseInt(arg, 10);
  if (time < 12) {
    return "Good Morning";
  } else if (time > 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}

function displayMessage(arg) {
  document.getElementById("greeting").textContent = arg;
}
