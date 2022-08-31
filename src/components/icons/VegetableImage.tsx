import React from 'react';
import vegetableImage from '../../../public/static/images/vegetables.png'

const VegetableImage=()=>{
    return <img src={vegetableImage.src}/>

}
export default React.memo(VegetableImage)
