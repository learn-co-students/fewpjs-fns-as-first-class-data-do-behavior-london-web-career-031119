/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


// function greet(string){
// let convertedString = timestring.replace(/:/g,'');
// let numberTimeString = Number(convertedString);

// }  

function displayMessage(string)
{
  document.querySelector('#greeting').textContent = string
  }


  function greet(timestring){
    let convertedString = timestring.replace(/:/g,'');
    let numberTimeString = Number(convertedString);
    switch(true){
      case numberTimeString > 1700:
    return "Good Evening";
    break;
      case numberTimeString < 1200:
      return "Good Morning";
    break;
      case numberTimeString <= 1700 ||numberTimeString  >=1200:
    return "Good Afternoon";
    break;
      default:
    return "what you on";
  }}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
// if they write 19:00 i can conver it to 1900 to compare against 2400 hours
// if string is larger than 1700 