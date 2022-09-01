import React from 'react'
import Cardes from './Cardes'
const ListProduct = ({list}) => {
  return (
    <div>
        <div  class="cardes" style={{display:"flex"}}>
        
        {list.length?list.map(elm=><Cardes elm={elm}/>):<h2>Not found </h2>}
       
          
    
        </div>
    </div>
  )
}

export default ListProduct
