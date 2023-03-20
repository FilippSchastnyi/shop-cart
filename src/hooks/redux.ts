import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatchType, AppStateType } from '@src/store/store'

export const useTypedDispatch = () => useDispatch<AppDispatchType>()
export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector
