import React from 'react'
import Categories from './Categories'
import ShoppingList from './ShoppingList'
import '../styles/Section.css'
import Button from './Button'


function Section () {
  return (
    <div className='section'>
        <Categories>
        <div className="categories">
        <select name="categorie" id="categorie" className='GORIES'>
           <option value="">exterieur</option>
             <option value="dog">Dog</option>
            <option value="cat">Cat</option>
           </select>
           <Button name="Reinitialiser" className="GORIES" />
          
       </div>
        </Categories>
         <ShoppingList>
        </ShoppingList> 
    </div>

  )
}

export default  Section