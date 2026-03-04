import type { FC } from 'react'
import { useDispatch, useSelector } from '../../services/store.ts'
import { getCounter, increment } from '../../services/slices/test/testSlice.ts'

export const HomePage: FC = () => {
  const counter = useSelector(getCounter)
  const dispatch = useDispatch()

  function incrementBtnClickHandler() {
    dispatch(increment())
  }

  return (
    <h1>
      HomePage
      <div>
        {counter}
        <button type={'button'} onClick={incrementBtnClickHandler}>
          Увеличить
        </button>
      </div>
    </h1>
  )
}
