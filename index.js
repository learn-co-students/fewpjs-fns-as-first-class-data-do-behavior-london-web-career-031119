/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet (time) {
  var text = time.slice(0,2);
  var integer = parseInt(text, 10);

  if (integer < 12) {
    return 'Good Morning';
  } else if (integer >= 12 && integer < 17) {
    return 'Good Afternoon'
  } else if (integer >= 17 && integer < 24) {
    return 'Good Evening';
  }
}

function displayMessage(greetString) {
  document.querySelector('h1#greeting').innerHTML = greetString;
};
