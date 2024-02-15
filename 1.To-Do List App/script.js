let inputBox = document.getElementById('input-box')
let listContainer = document.getElementById('list-container')

// Add Task To Li Element
function addTask() {
    const val = inputBox.value
    if (val === '') {
        alert('Please Enter Something')
    } else {
        console.log(val)
        let li = document.createElement('li')
        li.innerHTML = val
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

// Handle Enter key press
inputBox.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
})


// checked and removed element
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
})

// Store data in local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()