import Input from '@ui/Input/Input'
import { useFormContext } from 'react-hook-form'
import editGoodsFormControlsCss from './GoodsFormControls.module.scss'

const GoodsFormControls = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <>
      <div className={editGoodsFormControlsCss.FormControl}>
        <Input
          label="Name"
          name="name"
          register={register('name')}
          errors={errors}
        />
      </div>
      <div className={editGoodsFormControlsCss.FormControl}>
        <Input
          label="Price"
          name="price"
          type="number"
          register={register('price')}
          errors={errors}
        />
      </div>
      <div className={editGoodsFormControlsCss.FormControl}>
        <Input
          label="Quantity"
          name="quantity"
          type="number"
          register={register('quantity')}
          errors={errors}
        />
      </div>
    </>
  )
}

export default GoodsFormControls
