export const getOrders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await response.json()
    let html = "<h2>Custom Jewelry Orders</h2>"
    // add an if statement depending on the type to calculate the price in the orders module
    const convertedToString = orders.map((order) => {
        if (order.typeId === 1) {
            let orderPrice = order.metal.price + order.size.price + order.style.price
            return `
                <div>Order #${order.id} costs $${orderPrice}</div>
            `
        } else if (order.typeId === 2) {
            let orderPrice = (order.metal.price + order.size.price + order.style.price) * 2
            return `
                <div>Order #${order.id} costs $${orderPrice}</div>
            `
        } else {
            let orderPrice = (order.metal.price + order.size.price + order.style.price) * 4
            return `
                <div>Order #${order.id} costs $${orderPrice}</div>
            `
        }
    })
    html += convertedToString.join("")
    return html
}


// add an if statement depending on the type to calculate the price in the orders module
