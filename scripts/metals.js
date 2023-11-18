import { setMetal } from "./TransientState.js"
const response = await fetch("http://localhost:8088/metals")
const metals = await response.json()
// initial render returns metal choices as inputs
export const getMetals = () => {
    let html = ""
    const convertedToString = metals.map((metal) => {
        return `
        <div>
            <input type="radio" name="metal" value="${metal.id}">${metal.metal}</input>
        </div>
        `
    })
    html += convertedToString.join("")
    return html
}
// after a metal is selected this will inject the HTML and KEEP the selected choice
const injectMetalsHTML = (id) => {
    const metalEl = document.querySelector(".metal-choices")
    let html = "<h2>Metals</h2>"
    const convertedToString = metals.map((metal) => {
        if (metal.id === id) {
            return `
                <div>
                    <input type="radio" name="metal" value="${metal.id}" checked="checked">${metal.metal}</input>
                </div>
            `
        } else {
            return `
                <div>
                    <input type="radio" name="metal" value="${metal.id}">${metal.metal}</input>
                </div>
            `
        }
    })
    html += convertedToString.join("")
    metalEl.innerHTML = html
}
// change event listener
document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.name === "metal") {
        const metalId = parseInt(changeEvent.target.value)
        // invoke this function to set the transient state
        setMetal(metalId)
        // invoke function to inject the selected HTML into the DOM
        injectMetalsHTML(metalId)
    }
})