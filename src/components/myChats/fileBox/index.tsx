import { DownloadCloud } from '@/app/icons'
import React, { useState } from 'react'
export default function FileBox() {

  const [customFile, setCustomFile] = useState<any>()
  console.log(customFile);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCustomFile(e.target.files[0])
    }
  }

  return (
    <div className='bg-core-secBg w-[65%] h-96 rounded-lg flex flex-col items-center truncate relative py-5 px-5'>
      <div className='w-full h-full flex flex-col items-center gap-5 border-dashed border-2 border-emerald-600 pt-5'>
        <DownloadCloud />
        <p className='text-3xl text-core-text'>Drag and drop your files here</p>
        <input onChange={(e) => { handleFile(e) }} className='absolute top-0 w-full h-full opacity-0' type="file" />
        <p className='text-core-secText'>Files support: doc, img</p>
        <button className='text-core-primary border-2 border-solid border-core-primary py-1 px-3 rounded-md'>Browse files</button>
      </div>

    </div>
  )
}
