import React from 'react';
import {GoodsType} from "@src/ts/types";
import Numeric from "@ui/Numeric/Numeric";
import {useTypedDispatch} from "@src/hooks/redux";
import {cartSlice} from "@src/store/reducers/cartSlice";
import ProductActionGroup from "@pages/Home/sections/Shop/Goods/ProductCard/ProductActionGroup/ProductActionGroup";
import cardCss from './ProductCard.module.scss'

const ProductCard = ({name, price, quantity, id}: GoodsType) => {
  const dispatch = useTypedDispatch()
  const {addItemToCart, removeItemFromCart} = cartSlice.actions

  const onIncrementNumber =()=> {
    dispatch(addItemToCart({name, price, id}))
  }
  const onDecrementNumber =()=> {
    dispatch(removeItemFromCart({name, price, id}))
  }
  return (
    <div className={cardCss.container}>
      <div className={cardCss.left}>
      <span className='text--18 text--bold'>Product name : {name}</span>
      <span className='text--18 text--bold'>Price : {price}$</span>
      <span className='text--18 text--bold'>Left : {quantity}</span>
      </div>
      <div className={cardCss.right}>
        <ProductActionGroup isLogged id={id}/>
      <Numeric
        onIncrementNumber={onIncrementNumber}
        onDecrementNumber={onDecrementNumber}
        limit={quantity}
      />
    </div>
    </div>
  );
};

export default ProductCard;