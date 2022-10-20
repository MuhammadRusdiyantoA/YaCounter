const counter = document.getElementById('count')

document.onkeydown = (e) => {
    e = e || window.Event
    if (e.key === " ") {
        console.log(counter.innerText)
        let count = Number(counter.innerText) + 1
        counter.innerText = count
    }
}