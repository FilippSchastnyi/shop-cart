import React from 'react'
import cartCss from './Cart.module.scss'
import { useTypedSelector } from '@src/hooks/redux'
import CartItem from '@pages/Home/sections/Shop/Cart/CartItem/CartItem'

const Cart = () => {
  const { data, totalPrice } = useTypedSelector((state) => state.cart)
  return (
    <div className={cartCss.container}>
      <h3 className="title">Cart</h3>
      <div className={cartCss.content}>
      <ul className={cartCss.list}>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <CartItem
                id={item.id}
                price={item.price}
                name={item.name}
                quantity={item.quantity}
              />
            </li>
          )
        })}
      </ul>
      <div className={cartCss.total}>Total: {totalPrice}$</div>
      </div>
    </div>
  )
}

export default Cart
