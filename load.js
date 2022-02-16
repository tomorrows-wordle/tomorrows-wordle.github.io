var index = Math.floor((new Date().getTime() - new Date("02/14/2022").getTime()) / (1000 * 3600 * 24));

document.getElementById("tomorrow").innerHTML = words[index + 1].toUpperCase();
document.getElementById("today").innerHTML = words[index].toUpperCase();
document.getElementById("yesterday").innerHTML = words[index - 1].toUpperCase();