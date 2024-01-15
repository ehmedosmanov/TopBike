import React from 'react'
import ProductCard from '../../CommonComponents/ProductCard'

const NewProducts = () => {
  return (
    <section id='new-products' className='py-[60px]'>
      <div className='px-6'>
        <div className='heading'>
          <h2 className='font-semibold text-[24px] md:text-[60px] text-center'>
            New Product
          </h2>
        </div>
        <div className='products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 py-6'>
          <ProductCard
            image={
              'https://topbike-store-demo.myshopify.com/cdn/shop/products/product15_e805e1b0-a9ea-4b4a-981c-baf6c09b51b7.jpg?v=1608082102'
            }
            title={'RELEASE 2'}
            price={3250}
            discount={30}
          />
          <ProductCard
            image={
              'https://topbike-store-demo.myshopify.com/cdn/shop/products/product15_e805e1b0-a9ea-4b4a-981c-baf6c09b51b7.jpg?v=1608082102'
            }
            title={'RELEASE 2'}
            price={3250}
            discount={30}
          />
          <ProductCard
            image={
              'https://topbike-store-demo.myshopify.com/cdn/shop/products/product15_e805e1b0-a9ea-4b4a-981c-baf6c09b51b7.jpg?v=1608082102'
            }
            title={'RELEASE 2'}
            price={3250}
            discount={30}
          />
          <ProductCard
            image={
              'https://topbike-store-demo.myshopify.com/cdn/shop/products/product15_e805e1b0-a9ea-4b4a-981c-baf6c09b51b7.jpg?v=1608082102'
            }
            title={'RELEASE 2'}
            price={3250}
            discount={30}
          />
          <ProductCard
            image={
              'https://topbike-store-demo.myshopify.com/cdn/shop/products/product15_e805e1b0-a9ea-4b4a-981c-baf6c09b51b7.jpg?v=1608082102'
            }
            title={'RELEASE 2'}
            price={3250}
            discount={30}
          />
          <ProductCard
            image={
              'https://topbike-store-demo.myshopify.com/cdn/shop/products/product15_e805e1b0-a9ea-4b4a-981c-baf6c09b51b7.jpg?v=1608082102'
            }
            title={'RELEASE 2'}
            price={3250}
            discount={30}
          />
        </div>
      </div>
    </section>
  )
}

export default NewProducts
