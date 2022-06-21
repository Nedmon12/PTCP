import React from 'react'

export default function BehaviourNotification({behaviour}) {
  return (
      <div className='h-20 w-full flex justify-center my-4' >
    <div className="flex flex-row items-center bg-slate-100 h-20 w-[90vh] center mb-6 shadow-lg rounded ">
        <span className='text-gray-700 font-bold' >{behaviour.behaviourpoint}</span>
    </div>
    </div>
  )
}
