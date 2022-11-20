//Cambio de cantidad de articulos ingresado por los usuarios

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber<= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

//Agregar el total de productos al carrito cuando se presiona el boton AÑADIR AL CARRITO
const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastvalue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{
    lastvalue = lastvalue + userInputNumber;

    cartNotification.innerText = lastvalue;
    cartNotification.style.display = 'block';
    drawProductInModal();
    console.log(cartNotification);
});

//Mostrar el modal con el detalle del carrito
const cartIcontBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
/*let priceModal = document.querySelector('.cart-modal__price')*/
const productContainer = document.querySelector('.cart-modal__chekout-container')

cartIcontBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');

    if(lastvalue == 0){
        drawProductInModal();
    }
});

//Borrar el contenido del carrito
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');


deleteProductBtn.addEventListener('click', ()=>{
    productContainer.innerHTML = '<p class="cart-empty">Tu carrito esta Vacío</p>';
    lastvalue = 0;
    cartNotification.innerText = lastvalue;
});
}


//Funciones

function drawProductInModal(){
    productContainer.innerHTML = `
    <div class="cart-modal__datails-container">
        <img class="cart-modal__image" src="img/3.jpg" alt="producto1">
    <div>
        <p class="cart-modal__product">Polo React</p>
        <p class="cart-modal__price">S/. 25.00 x3 <span>S/. 75.00</span></p>
    </div>
        <img class="cart-modal__delete" src="img/icon-delete.svg" alt="delete">
    </div>
    <button class="cart-modal__go">Ir a mi carrito</button>`;
    deleteProduct();
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `S/. 25.00 x${lastvalue} <span>S/.${lastvalue*25}.00 </span>`
}
