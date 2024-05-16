import React from 'react'

export default function FileBox() {


  return (
    <div className='bg-slate-200 w-[50%] h-80 rounded-lg flex flex-col items-center truncate relative py-5 px-5'>
      <p className='text-3xl'>Drag the file here</p>
      <div className='w-full h-full flex flex-col items-center mt-5'>
        <label className='text-xl'>Choose the file</label>
        <input className='absolute top-0 w-full h-full ' type="file" />
      </div>
      <div className='flex flex-row w-full justify-between'>
        <button className='py-2 px-5 rounded-lg shadow-lg'>Cancel</button>
        <button className='py-2 px-5 rounded-lg shadow-lg'>Send</button>
      </div>

    </div>
  )
}
