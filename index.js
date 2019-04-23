/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(tString) {
  const timeInt = parseInt(tString.split(':').shift(), 10);
  if ( timeInt < 12 ) {
    return "Good Morning";
  } else if ( timeInt < 17 ) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  };
};

function displayMessage(greetString) {
  document.querySelector('h1#greeting').innerHTML = greetString;
};