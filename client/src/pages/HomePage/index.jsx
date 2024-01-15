import React from 'react'
import HeroSlider from '../../components/HomeComponents/HeroSlider'
import Account from '../../components/NavbarComponents/Account'
import ServicesBike from '../../components/HomeComponents/ServicesBike'
import NewProducts from '../../components/HomeComponents/NewProducts'
import OnlyOnline from '../../components/HomeComponents/OnlyOnline'
import Categories from '../../components/HomeComponents/Categories'
import LatestNews from '../../components/HomeComponents/LatestNews'

const Home = () => {
  return (
    <main id='home'>
      <HeroSlider />
      <ServicesBike />
      <NewProducts />
      <OnlyOnline />
      <Categories />
      <LatestNews />
    </main>
  )
}

export default Home
