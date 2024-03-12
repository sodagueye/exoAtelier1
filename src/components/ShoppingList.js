import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import monstera from '../assets/monstera.jpg'
 import calathea from '../assets/calathea.jpg'
import lyrata from '../assets/lyrata.jpg'

function ShoppingList() {
    return (<div className="shoppingList">
         <PlantItem className="plantes"
            img1={monstera}
            img2={calathea} 
            img3={lyrata}
            olovier=" Olovier"
            basilique=" Basilique"
            menthe=" Menthe"
          
            /> 
             
        </div>)
}

export default ShoppingList