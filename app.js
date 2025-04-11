
var getInp = document.getElementById('inp')
var getUl = document.getElementById('ul')

function send() {
    getUl.innerHTML += `<li> ${getInp.value} <span> <button onclick='editItem(this)' class='btn btn-info'> Edit </button> <button onclick='this.parentNode.parentNode.remove()' class='btn btn-dark'> Delete </button> </span></li>`
    getInp.value = ''
}

function delet() {
    getUl.innerHTML = ''
}
function editItem(e) {
    var getValue = prompt("Enter updated value", e.parentNode.parentNode.firstChild.textContent)
    e.parentNode.parentNode.firstChild.textContent = getValue
    console.log(getValue)
}

getInp.addEventListener('keydown', function (event) {
    var key = event.keyCode || event.which
    if (key === 13) {
        send()
    }
})