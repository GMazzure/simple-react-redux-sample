import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from '../../store/slices/counter'


const Counter = () => {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (

    <div className="flex flex-col w-full">
      <div className="bg-neutral-200 w-full text-center font-bold">Filter users by age with a Counter:</div>

      <div className="flex w-full">      
        <button className="bg-red-600 text-white p-3 text-lg hover:bg-red-700 w-full" onClick={() => dispatch(decrease())}>
          Decrease
        </button>

        <button className="bg-blue-600 text-white p-3 px- text-lg hover:bg-blue-800 w-full" onClick={() => dispatch(increase())}>
          Increase
        </button>

        <div className="text-3xl w-full text-center p-2 bg-slate-100">
          {counter}
        </div>
      </div>
    </div>
    
  )
}

export default Counter
