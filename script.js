const counter = document.getElementById('count')
const button = document.getElementById('reset')
const text = document.getElementsByTagName('p')

button.onclick = () => {
    counter.innerText = -1
}

window.onclick = () => {
    counter.innerText = Number(counter.innerText) + 1
}

document.onkeydown = (e) => {
    e = e || window.Event
    if (e.key === " ") {
        console.log(counter.innerText)
        let count = Number(counter.innerText) + 1
        counter.innerText = count
    }

    else if (e.ctrlKey && e.key === "z") {
        counter.innerText = 0
    }

    else if (e.key === "z") {
        if (counter.innerText > 0) {
            counter.innerText = Number(counter.innerText) - 1
        }
    }
}

if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
    text.innerText = "Klik layar untuk tambah counter"
}