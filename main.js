document.getElementById("demo").innerHTML="Hello World" //id selector

document.getElementById("img").src ="icon.jpg" //attribute change

document.getElementById("dt").innerHTML= "Date : " + Date() // dynamic HTML content

document.getElementById("demo").style.color = "blue" // CSS DOM

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

document.getElementById("myBtn").addEventListener("click", function() {
  alert("Hello Monday!!");
});

