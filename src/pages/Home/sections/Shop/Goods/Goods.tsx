import React, { useEffect, useState } from 'react'
import { useTypedDispatch, useTypedSelector } from '@src/hooks/redux'
import { getAllGoods } from '@src/store/actionCreators/goods'
import Spinner from '@ui/Spinner/Spinner'
import { GoodsType } from '@src/ts/types'
import ProductCard from '@pages/Home/sections/Shop/Goods/ProductCard/ProductCard'
import Button from '@ui/Button/Button'
import InlineSVG from 'react-inlinesvg'
import productActionGroupCss from '@pages/Home/sections/Shop/Goods/ProductCard/ProductActionGroup/ProductActionGroup.module.scss'
import add from '@assets/images/svg/add.svg'
import Modal from '@ui/Modal/Modal'
import GoodsForm from '@pages/Home/sections/Shop/Goods/GoodsForm/GoodsForm'
import GoodsCss from './Goods.module.scss'

const Goods = () => {
  const {
    error,
    isLoading,
    data: goodsList,
  } = useTypedSelector((state) => state.goods)
  const [isModalActive, setIsModalActive] = useState(false)
  const dispatch = useTypedDispatch()

  useEffect(() => {
    dispatch(getAllGoods())
  }, [dispatch])

  const onHandleAddButtonClick = () => {
    setIsModalActive(true)
  }

  const closeModal = () => {
    setIsModalActive(false)
  }

  return (
    <div className={GoodsCss.container}>
      {isLoading && <Spinner />}
      <div className={GoodsCss.header}>
        <h3 className="title">Shop</h3>
        <Button
          size="auto"
          variant="link"
          onClick={() => {
            onHandleAddButtonClick()
          }}
        >
          <InlineSVG
            title="add product"
            className={productActionGroupCss.svgIcons}
            width={24}
            height={24}
            src={add}
          />
        </Button>
      </div>
      {goodsList.length === 0 && <h3>Looks like there is no items</h3>}
      <ul className={GoodsCss.list}>
        {goodsList.map((goods: GoodsType) => {
          return (
            <li key={goods.id} className={GoodsCss.item}>
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
      <Modal active={isModalActive} closeModal={closeModal}>
        <GoodsForm onComplete={closeModal} />
      </Modal>
    </div>
  )
}

export default Goods
