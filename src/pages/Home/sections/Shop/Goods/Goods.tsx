import React, { useEffect } from 'react'
import { useTypedDispatch, useTypedSelector } from '@src/hooks/redux'
import { getAllGoods } from '@src/store/actionCreators/goods'
import Spinner from '@ui/Spinner/Spinner'
import { GoodsType } from '@src/ts/types'
import ProductCard from '@pages/Home/sections/Shop/Goods/ProductCard/ProductCard'
import GoodsCss from './Goods.module.scss'

const Goods = () => {
  const {
    error,
    isLoading,
    data: goodsList,
  } = useTypedSelector((state) => state.goods)
  const dispatch = useTypedDispatch()

  useEffect(() => {
    dispatch(getAllGoods())
  }, [dispatch])

  return (
    <div className={GoodsCss.container}>
      {isLoading && <Spinner />}
      <h3 className="title">Shop</h3>
      <ul className={GoodsCss.list}>
        {goodsList.map((goods: GoodsType) => {
          return (
            <li key={goods.id}>
              <ProductCard
                name={goods.name}
                price={goods.price}
                quantity={goods.quantity}
                id={goods.id}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Goods
