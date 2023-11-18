import { setOrder } from "./TransientState.js"

export const getButton = () => {
    return "<div><button id='button'>Save Order</button></div>"
}

document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "button") {
        setOrder()
    }
})