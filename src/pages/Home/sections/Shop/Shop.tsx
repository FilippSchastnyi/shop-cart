import React from 'react'
import Goods from '@pages/Home/sections/Shop/Goods/Goods'
import Cart from '@pages/Home/sections/Shop/Cart/Cart'
import ShopCss from './Shop.module.scss'

const Shop = () => {

  return (
    <div className={ShopCss.container}>
      <Goods />
      <Cart />
    </div>
  )
}

export default Shop
