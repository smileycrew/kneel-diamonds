import { getButton } from "./SaveOrder.js"
import { getMetals } from "./metals.js"
import { getOrders } from "./orders.js"
import { getSizes } from "./sizes.js"
import { getStyles } from "./styles.js"
import { getTypes } from "./types.js"
// variables that DO NOT CHANGE
const container = document.querySelector(".container")
const ListOfMetals = getMetals()
const ListOfSizes = getSizes()
const ListOfStyles = getStyles()
const SaveOrder = getButton()
// function to render the page
const renderPage = async () => {
    const ListOfOrders = await getOrders()
    const listOfTypes = getTypes()
    container.innerHTML = `
        <h1>Kneel Diamonds</h1>
        
        <article class="choices-container">

            <section class="metal-choices">
                <h2>Metals</h2>
                ${ListOfMetals}
            </section>

            <section class="size-choices">
                <h2>Sizes</h2>
                ${ListOfSizes}
            </section>

            <section class="style-choices">
                <h2>Styles</h2>
                ${ListOfStyles}
            </section>
        
        </article>

        <article class="save-container">
        <section class="types-section">
            <h2>Type</h2>
            ${listOfTypes}
        </section>
        <section>
            ${SaveOrder}
        </section>
        </article>
        
        <article class="order-container">
            ${ListOfOrders}
        </article>
    `
}
// invoke the first render of the page
renderPage()
// custom event listener renders the page when new order is placed (choices reset)
document.addEventListener("orderPlaced", event => {
    renderPage()
})