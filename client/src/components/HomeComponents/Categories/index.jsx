import React from 'react'
import Category from './Category'
import './index.scss'

const Categories = () => {
  return (
    <section id='main-categories'>
      <div className='section-content px-4'>
        <div className='categories grid grid-cols-1 lg:grid-cols-3 w-full gap-4 py-8'>
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </section>
  )
}

export default Categories
