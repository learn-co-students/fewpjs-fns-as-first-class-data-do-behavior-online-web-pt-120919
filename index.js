/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){ 
  let hour = timeString.split(`:`);
  let int = parseInt(hour);
  if (int < 12) {return('Good Morning')
  }
  if (int < 17) {return('Good Afternoon')
  }
  if (int <= 24) {return('Good Evening')
  }

}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById('greeting').innerText = string 

}

