import { setSize } from "./TransientState.js"
const response = await fetch("http://localhost:8088/sizes")
const sizes = await response.json()
// function to render the initial HTML
export const getSizes = () => {
    let html = ""
    const convertedToString = sizes.map((size) => {
        return `
            <div>
                <input type="radio" name="size" value="${size.id}">${size.carets} carets</input>
            </div>
        `
    })
    html += convertedToString.join("")
    return html
}
// function to inject updated HTML
const injectSizesHTML = (id) => {
    const getSizesEl = document.querySelector(".size-choices")
    let html = "<h2>Sizes</h2>"
    const convertedToString = sizes.map((size) => {
        if (size.id === id) {
            return `
                <div>
                    <input type="radio" name="size" value="${size.id}" checked="checked">${size.carets} carets</input>
                </div>
            `
        } else {
            return `
                <div>
                    <input type="radio" name="size" value="${size.id}">${size.carets} carets</input>
                </div>
            `
        }
    })
    html += convertedToString.join("")
    getSizesEl.innerHTML = html
}
// "change" event listener
document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.name === "size") {
        const sizeId = parseInt(changeEvent.target.value)
        setSize(sizeId)
        injectSizesHTML(sizeId)
    }
})