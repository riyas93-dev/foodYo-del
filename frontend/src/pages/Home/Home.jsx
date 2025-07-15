import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/Explore Menu/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../../components/Food Display/FoodDisplay'
import AppDownload from '../../components/App Download/AppDownload'

const Home = () => {
  const [category, setCategory] = useState("All");


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload />
    </div>
  )
}

export default Home