import React from 'react'
import ShoppingCartCard from './ShoppingCartCard'
// import OrderSummary from './OrderSummary'
import Footer from './Footer'
// import './ShoppingCart.css'


const ShoppingCart = ({ shoppingCart, quantity, setQuantity, itemToShoppingCart, removeItemFromCartHandler, itemTotals, priceTotals, removeItemHandler }) => {
    if (shoppingCart.length === 0) {
        return (<div>
            <div>
                <h3 className='mt-40 ml-20'>Your Shopping Cart is Empty</h3>
            </div>


            <div className='w-screen mt-[35rem]'>
                <Footer />
            </div>

        </div>)
    }
    else if (shoppingCart.length > 0) {
        return <div>
            <div>
                <ShoppingCartCard shoppingCart={shoppingCart} quantity={quantity} setQuantity={setQuantity} itemToShoppingCart={itemToShoppingCart} removeItemFromCartHandler={removeItemFromCartHandler} itemTotals={itemTotals} priceTotals={priceTotals} removeItemHandler={removeItemHandler} />
            </div>

            <div className='mt-[20rem] w-screen'>
                <Footer />
            </div>

        </div>
    }
}

export default ShoppingCart