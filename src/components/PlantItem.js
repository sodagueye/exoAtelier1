import '../styles/PlantItem.css'
import Button from './Button'


function PlantItem(props) {

    return (
        <div className='plan'>
           <div> 
            <img src={props.img1} className="img"/>
            <h3>{props.olovier}</h3>
            <i class="fa-solid fa-star-of-life bleu"></i>
             <div className='jaune'>
                <i class="fa-solid fa-star-of-life"></i>
                 <i class="fa-solid fa-star-of-life"></i>
                 <i class="fa-solid fa-star-of-life"></i>
            </div>
           
            <Button name="Ajouter"/>
          
            </div>
            <div>
            <img src={props.img2} className="img"/>
            <h3>{props.basilique}</h3>
            <div className='bleu'>

           <i class="fa-solid fa-star-of-life "></i>
            <i class="fa-solid fa-star-of-life"></i>
           <i class="fa-solid fa-star-of-life"></i></div>
           <div className='jaune'>

                <i class="fa-solid fa-star-of-life"></i>
                <i class="fa-solid fa-star-of-life"></i>
           </div>
        
           <Button name="Ajouter"/>
            </div>
            <div>
            <img src={props.img3} className="img"/>
            <h3>{props.menthe}</h3>
            <div className='bleu'>

               <i class="fa-solid fa-star-of-life"></i>
                 <i class="fa-solid fa-star-of-life"></i>
            </div>
            <div className='jaune'>
                <i class="fa-solid fa-star-of-life"></i>
                 <i class="fa-solid fa-star-of-life"></i>
                <i class="fa-solid fa-star-of-life"></i>
          </div>
          
            <Button name="Ajouter"/>
            </div>
        </div>

    )
    
}

export default PlantItem

