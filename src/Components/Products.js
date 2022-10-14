import React from 'react'
import Productbox from './Productbox'
import pimage1 from '../images/s1.png'
import pimage2 from '../images/s2.png'
function Products() {
  return (
    <div id='products'>
   <h1>CHOOSE & ENJOY</h1>
   <p>Select among our greatest range of awesome tastes</p>
   <div className='a-container'>
    <Productbox image={pimage1}title="Veg King Burger"/>
    <Productbox image={pimage2}title="Veg Supreme Burger"/>
    <Productbox image={pimage1}title="Masala King Burger"/>
   </div>
    </div>
  )
}

export default Products