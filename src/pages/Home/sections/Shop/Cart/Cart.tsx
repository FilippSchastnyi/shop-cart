import React from 'react'
import {useTypedDispatch, useTypedSelector} from '@src/hooks/redux'
import CartItem from '@pages/Home/sections/Shop/Cart/CartItem/CartItem'
import Button from "@ui/Button/Button";
import {updateGoods} from "@src/store/actionCreators/goods";
import {GoodsType} from "@src/ts/types";
import {cartSlice} from "@src/store/reducers/cartSlice";
import cartCss from './Cart.module.scss'

const Cart = () => {
  const { data, totalPrice } = useTypedSelector((state) => state.cart)
  const goodsData = useTypedSelector((state) => state.goods.data)
  const dispatch = useTypedDispatch()
  const {removeItemFromCart} = cartSlice.actions

  const onBuyProduct = () =>{
    const processedGoods = data.map((item) => {
      const {id, quantity} = item;
      const oldProduct = goodsData.find((product: GoodsType) => product.id === id);
      const oldQuantity = oldProduct?.quantity || 0;
      const newQuantity = oldQuantity - quantity;
      const price = oldProduct?.price || 0;
      return { ...item, quantity: newQuantity, price };
    });

    dispatch(updateGoods(processedGoods))
    dispatch(removeItemFromCart(processedGoods))
  }

  return (
    <div className={cartCss.container}>
      <h3 className="title">Cart</h3>
      <div className={cartCss.content}>
      <ul className={cartCss.list}>
        {data.map((item) => {
          return (
            <li key={item.id} className={cartCss.item}>
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
      <div className={cartCss.total}>
        <span>Total: {totalPrice}$</span>
        <Button
          onClick={onBuyProduct}
          size="sm"
        >
          Buy
        </Button>
      </div>
      </div>
    </div>
  )
}

export default Cart
