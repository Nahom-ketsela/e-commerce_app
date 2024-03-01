import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={product.image} alt="" className='carticon-product-icon' />
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                                <button className='cartitems-quantity'>{cartItems[product.id]}</button>
                                <p>${product.price * cartItems[product.id]}</p>
                                <button className='cartitems-remove' onClick={() => { removeFromCart(product.id) }}>Remove</button>
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;

            })}
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1>Cart Totals</h1>
                        <div>
                            <div className="cartitems-total-item">
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>

                            </div>
                            <hr />
                            <div className='cartitems-total-item'>
                                <p>Shipping Fee </p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div>
                            <h3>Total</h3> 
                            <h3>$ {getTotalCartAmount()}</h3>  
                           </div>                    
                      </div>
                      <button>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
    )
}

export default CartItems
