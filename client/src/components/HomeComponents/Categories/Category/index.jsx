import React from 'react'

const Category = () => {
  return (
    <div className='category flex justify-center relative top-0 bottom-0 cursor-pointer group overflow-hidden'>
      <div className='category-image overflow-hidden duration-300 transition-all'>
        <img
          className='transform group-hover:scale-110 overflow-hidden duration-300 transition-all'
          src='https://topbike-store-demo.myshopify.com/cdn/shop/files/collection-bike.jpg?v=1613575695'
          alt='Category'
        />
      </div>
      <div className='category-content text-center py-6 px-2 bg-[#ffffffb5] absolute overflow-hidden flex items-center justify-center cursor-pointer bottom-0 w-full translate-y-20  group-hover:-translate-y-0 group-hover:opacity-100 duration-300 transition-all opacity-0 transform'>
        <p className='text-[18px]'>Bicycle</p>
      </div>
    </div>
  )
}

export default Category
