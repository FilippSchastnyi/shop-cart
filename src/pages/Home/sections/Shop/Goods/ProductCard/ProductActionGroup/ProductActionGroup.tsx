import React, {useState} from 'react'
import InlineSVG from 'react-inlinesvg'
import edit from '@src/assets/images/svg/edit.svg'
import remove from '@src/assets/images/svg/delete.svg'
import Button from '@ui/Button/Button'
import Flyout from '@ui/Flyout/Flyout'
import {useTypedDispatch} from "@src/hooks/redux";
import {removeGoodsById} from "@src/store/actionCreators/goods";
import productActionGroupCss from './ProductActionGroup.module.scss'
import {cartSlice} from "@src/store/reducers/cartSlice";

const ProductActionGroup = ({ isLogged, id }: { isLogged: boolean, id: string }) => {
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false)
  const {deleteProduct} = cartSlice.actions
  const dispatch = useTypedDispatch()

  const closeFlyout = () => {
    setIsFlyoutOpen(false)
  }
  const onHandleEditButtonClick = () => {
    setIsFlyoutOpen(true)
  }
  const onHandleRemoveButtonClick = () => {
    dispatch(removeGoodsById(id))
    dispatch(deleteProduct(id))
  }

  return (
    <div className={productActionGroupCss.container}>
      <Button
        size="auto"
        variant="link"
        onClick={() => {
          onHandleEditButtonClick()
        }}
        disabled={!isLogged}
      >
        <InlineSVG
          title="edit product"
          className={productActionGroupCss.svgIcons}
          width={24}
          height={24}
          src={edit}
        />
      </Button>
      <Button
        size="auto"
        variant="link"
        onClick={() => {
          onHandleRemoveButtonClick()
        }}
        disabled={!isLogged}
      >
        <InlineSVG
          title="remove product"
          className={productActionGroupCss.svgIcons}
          width={24}
          height={24}
          src={remove}
        />
      </Button>
      <Flyout
        isOpen={isFlyoutOpen}
        closeFlyout={closeFlyout} />
    </div>
  )
}

export default ProductActionGroup
