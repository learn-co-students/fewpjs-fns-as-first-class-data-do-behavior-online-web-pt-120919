document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


function greet(timeString) {
    let hour = timeString.split(":")[0];
    hour = parseInt(hour);

    if (hour < 12){
      return 'Good Morning';
    }
    else if (hour > 12 && hour < 17){
      return 'Good Afternoon'
    }
    else {
      return 'Good Evening'
    }
}

function displayMessage(message) {
    document.getElementById('greeting').innerText = message
}