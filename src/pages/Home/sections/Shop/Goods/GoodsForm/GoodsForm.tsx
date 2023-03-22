import React from 'react'
import { FieldValues, FormProvider, useForm} from 'react-hook-form'
import Button from '@ui/Button/Button'
import {useTypedDispatch} from "@src/hooks/redux";
import {createNewGoods, updateGoods} from "@src/store/actionCreators/goods";
import GoodsFormControls from './GoodsFormControls/GoodsFormControls'
import editGoodsFormControlsCss from './GoodsForm.module.scss'
import {GoodsType} from "@src/ts/types";

type GoodsFormProps = {
  id?: string,
  onComplete: ()=> void
}

enum GoodsFormVariant {
  EDIT,
  ADD
}

const GoodsForm = ({id, onComplete}: GoodsFormProps) => {
  const dispatch = useTypedDispatch()
  const operationVariant = id ? GoodsFormVariant.EDIT : GoodsFormVariant.ADD
  const title = operationVariant === GoodsFormVariant.EDIT ? 'Edit Product' : 'Add Product'

  const methods = useForm({
    mode: 'onChange',
  })

  const onHandleSubmitForm = (formData: FieldValues) => {
    if (operationVariant === GoodsFormVariant.EDIT){
      dispatch(updateGoods([
        {
          id: id as string,
          quantity: formData.quantity,
          price: formData.price,
          name: formData.name
        }]
      ))
    }
    else {
      dispatch(createNewGoods(
        {
          quantity: formData.quantity,
          price: formData.price,
          name: formData.name
        }
      ))
    }
  }

  return (
    <FormProvider {...methods}>
      <h2>{title}</h2>
      <form
        onSubmit={methods.handleSubmit((data) => {
          const processData: Omit<GoodsType, 'id'> = {
            name: data.name,
            price: +data.price,
            quantity: +data.quantity
          }

          onHandleSubmitForm(processData)
          onComplete()
        })}
      >
        <div className={editGoodsFormControlsCss.container}>
          <GoodsFormControls />
        </div>
        <Button size="w100" type="submit">
          {title}
        </Button>
      </form>
    </FormProvider>
  )
}

export default GoodsForm
