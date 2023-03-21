import React from 'react';
import {GoodsType} from "@src/ts/types";
import cartItemCss from './CartItem.module.scss'

const CartItem = ({price, name, id, quantity}: GoodsType) => {
  return (
    <div className={cartItemCss.container}>
      <div className={cartItemCss.left}>
        <span>Name: {name}</span>
        <span>Price: {price}$</span>
      </div>
      <div className={cartItemCss.right}>
        <span>Count: {quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;