import React from 'react'
import Cart from './Cart'
import Section from './section';
import '../styles/main.css'
import Button  from './Button'
function Main() {
  const monsteraPrice = 8
  const ivyPrice = 10
  const flowerPrice = 15
  return (
    <div className='main'>

      <Cart title="panier">
        <ul>
          <li>Monstera : {monsteraPrice}</li>
          <li>Lierre : {ivyPrice}€</li>
          <li>Fleurs : {flowerPrice}€</li>
        </ul>
        Total : {monsteraPrice + ivyPrice + flowerPrice}€
        <Button name="voir le panier"/>
       </Cart>
     <Section />
    </div>
  )

}

export default Main