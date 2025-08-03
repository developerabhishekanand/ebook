import React from 'react'
import Image from 'next/image';

const index = ({ item }) => {
  { console.log('Testing item data') }
  const { name, title, price, category } = item;
  return (
    <div className="p-3">
    <div className="card w-auto bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
      <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <Image
          src={item.image}
          alt={name}
          fill
          style={{ objectFit: 'cover',width: '100%' }}
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
          <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default index;
