import { notFound } from 'next/navigation';
import React from 'react'

const Review = async ({params}) => {
    const {id} = await params;

    if(parseInt(id) > 10){
        return notFound();
    }

  return (
    <div>
      <div className='bg-amber-200 text-3xl p-4 text-black'>
        Review Id : {id}
      </div>
    </div>
  )
}

export default Review
