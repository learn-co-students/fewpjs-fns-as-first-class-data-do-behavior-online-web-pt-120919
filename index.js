/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str) {
  let time = str.split(':');
  time[0] = parseInt(time[0], 10);

  if (time[0] < 12) {
    return "Good Morning"
  } else if (time[0] < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(str) {
  document.getElementById('greeting').innerText = str;
}