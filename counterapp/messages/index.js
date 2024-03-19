let name = "Harry Potter"
let greeting =     "Welcome to the website " + name


let welcomeEl = document.getElementById("welcome-el")

welcomeEl.innerText = greeting + " " + name

welcomeEl.innerText += "emoji"