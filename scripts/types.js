import { setType } from "./TransientState.js"

const types = [
    {
        "id": 1,
        "type": "Ring",
    },
    {
        "id": 2,
        "type": "Earring",
    },
    {
        "id": 3,
        "type": "Necklace",
    }
]
// function that creates the input for types using html
export const getTypes = () => {
    let html = "<section>"
    const mapTypes = types.map((type) => {
        return `<input type="radio" name="type" value="${type.id}">${type.type}</input>`
    })
    html += mapTypes.join("")
    html += "</section>"
    return html
}
// function to inject updated HTML after selection has been made
const injectTypesHTML = (id) => {
    const getTypesEl = document.querySelector(".types-section")
    let html = "<h2>Type</h2>"
    const mapTypes = types.map((type) => {
        if (type.id === id) {
            return `
                <div>
                    <input type="radio" name="type" value="${type.id}" checked="checked">${type.type}</input>
                </div>
            `
        } else {
            return `
                <div>
                    <input type="radio" name="type" value="${type.id}">${type.type}</input>
                </div>
            `
        }
    })
    html += mapTypes.join("")
    getTypesEl.innertHTML = html
}
// "change" event listener will invoke function from transient state
document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.name === "type") {
        const typeId = parseInt(changeEvent.target.value)
        setType(typeId)
        injectTypesHTML(typeId)
    }
})
// make sure there isnt anything left to save (need to restart my database)