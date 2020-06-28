/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


let now = now.format("HH:mm");
console.log(now);


function greet(now) {

  if (now <  "12:00" || now > "5:00") {
    return `Good Morning`;
  }
  
  if (now == "12:00" || now < "17:00") {
      return `Good Afternoon`;
  }
  
    if (now > "17:00") {
      return `Good Evening`;
    }
}


function displayMessage(greet) {

  document.getElementById("greeting").innerText = greet;
}




