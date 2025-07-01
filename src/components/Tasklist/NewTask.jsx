import React from 'react'

const NewTask = ({data}) => {
  return (
   <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5'>
      <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div>
      <h2 className='text-2xl mt-5 font-semibold'>{data.tasktitle}</h2>
      <p className='text-sm mt-2'>{data.description}</p>
     

     <div className='mt-5'>
      <button className='bg-red-600 text-sm px-3 py-1 rounded'>Accept task</button>
     </div>
      </div>
  )
}

export default NewTask
