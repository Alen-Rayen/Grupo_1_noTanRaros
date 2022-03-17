console.log('carrito connected succes!');



let carrito = document.querySelector('#carrito');
let montoTotal = document.querySelector('.total-amount')



const getCarrito = async () => {

     try {
         const response = await fetch('/api/cart/show')
         const result = await response.json()

         if(result.ok && carrito){

            cargarTabla(result.data)
         }

     } catch (error) {
         console.error(error);
     }

}


const addItem = async (id) => {

    try {
        const response = await fetch(`/api/cart/${id}`, {
            method: 'POST'
        })
        const result = await response.json()

        if(result.ok && carrito){
            cargarTabla(result.data)
        }

    } catch (error) {
        console.error(error);
    }

}

const removeItem = async (id) => {

    try {
        
        const response = await fetch(`/api/cart/${id}`, {
            method: 'DELETE'
        })
        const result = await response.json()

        if(result.ok){
            cargarTabla(result.data)
        }

    } catch (error) {
        console.error(error);
    }
}

const removeAllItems = async (id) => {

    try {
        const response = await fetch(`/api/cart/item/${id}`, {
            method: 'DELETE'
        })
        const result = await response.json()

        if(result.ok){
            cargarTabla(result.data)
        }
    } catch (error) {
        console.error(error);
    }
}

const emptyCart = async () => {
    try {
        const response = await fetch(`/api/cart/empty`, {
            method: 'DELETE'
        })
        const result = await response.json()

        if(result.ok){
            cargarTabla(result.data)
        }
    } catch (error) {
        console.error(error);
    }
}

const cargarTabla = (data) => {
    carrito.innerHTML = null;
    let totalCompra = 0;

    data.forEach(({id, amount, image, name, price, total}) => {
        totalCompra += +total;
        let item = `
        <div class="cart-item">
                    <div class="product-image-container">
                        <img class="product-image" src="/images/products/${image}" alt="image">
                    </div>
                    <div class="product-title">
                        <h3>${name}</h3>
                    </div>
                    <div class="price-manage">
                        <div class="price-buttons">
                            <i class="far fa-minus-circle" onclick="removeItem('${id}')"></i>
                            <span class="product-amount">${amount}</span>
                            <i class="far fa-plus-circle" onclick="addItem('${id}')"></i>
                        </div>
                        <span class="product-price">${price}</span>
                        <span class="product-total">$${total}</span>
                        <button class="delete-product" onclick="removeAllItems('${id}')">ELIMINAR</button>
                    </div>
                </div>
        `

        carrito.innerHTML += item
    })

    montoTotal.innerHTML = `Total: $${+totalCompra}`
}

carrito && getCarrito();