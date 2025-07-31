import React from 'react'
import Image from 'next/image';

const index = ({item}) => {
  {console.log('Testing item data')}
   const {name,title,price,category} = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <div style={{ position: 'relative', width: '100%', height: '200px' }}>
    <Image
      src={item.image}
      alt={name}
      fill
      style={{ objectFit: 'cover' }}
    />
  </div>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{category}</div>
    </h2>
    <p>{title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white duration-200 px-3 py-1">${item.price}</div>
      <div className="badge cursor-pointer rounded-full badge-outline hover:bg-pink-500 hover:text-white duration-200 px-3 py-1">Buy Now</div>
    </div>
  </div>
</div>
  )
}

export default index;
