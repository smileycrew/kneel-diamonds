import { setStyle } from "./TransientState.js"
const response = await fetch("http://localhost:8088/styles")
const styles = await response.json()
// functio nto render the initial HTML
export const getStyles = () => {
    let html = ""
    const convertedToString = styles.map((style) => {
        return `
        <div>
            <input type="radio" name="style" value="${style.id}">${style.style}</input>
        </div>
        `
    })
    html += convertedToString.join("")
    return html
}
// function that will inject updated HTML after selection
const injectStylesHTML = (id) => {
    const getStyleEl = document.querySelector(".style-choices")
    let html = "<h2>Styles</h2>"
    const convertedToString = styles.map((style) => {
        if (style.id === id) {
            return `
                <div>
                    <input type="radio" name="style" value="${style.id}" checked="checked">${style.style}</input>
                </div>
            `
        } else {
            return `
                <div>
                    <input type="radio" name="style" value="${style.id}" >${style.style}</input>
                </div>
            `
        }
    })
    html += convertedToString.join("")
    getStyleEl.innerHTML = html
}
// "change" event listener invokes 2 functions
document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.name === "style") {
        const styleId = parseInt(changeEvent.target.value)
        setStyle(styleId)
        injectStylesHTML(styleId)
    }
})