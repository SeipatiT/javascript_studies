

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment() {
    console.log("button was clicked")
    count += 1
    console.log(count)

    countEl.innerText = count
}


//Save function logs out count when called
function save() {
    let countStr = count + " - "
    console.log(count)
    saveEl.textContent += countStr
}


