import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from '../../store/slices/counter'


const Contador = () => {

  const contador = useSelector(state => state.contador)
  const dispatch = useDispatch()

  console.log("rendering")
  return (

    <div >
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <div className="text-3xl font-bold underline">
        {contador}
      </div>
    </div>
  )
}

export default Contador
