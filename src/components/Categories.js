import React from 'react';
import '../styles/Categories.css'


function Categories(props) {

     return(
   <div className="categories">
        {props.children}
       
 </div>
 );
}

export default Categories

