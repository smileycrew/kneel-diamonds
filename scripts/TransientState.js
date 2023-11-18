// new MAP method to create a MAP "object"
const transientState = new Map()
transientState.set("metalId", 0)
transientState.set("sizeId", 0)
transientState.set("styleId", 0)
transientState.set("typeId", 0)
// function to set value of the key
export const setMetal = (chosenMetal) => {
    transientState.set("metalId", chosenMetal)
}

export const setSize = (chosenSize) => {
    transientState.set("sizeId", chosenSize)
}

export const setStyle = (chosenStyle) => {
    transientState.set("styleId", chosenStyle)
}
// function that will set the STATE of type
export const setType = (chosenId) => {
    transientState.set("typeId", chosenId)
}
export const setOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(transientState))
    }
    const response = await fetch("http://localhost:8088/orders", postOptions)
    const customEvent = new CustomEvent("orderPlaced")
    document.dispatchEvent(customEvent)
}