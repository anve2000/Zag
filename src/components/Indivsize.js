import React, { useState } from 'react'
import './Indivsize.css'

const Indivsize = ({key,labels}) => {

    const [isOn, setisOn] = useState(false);
    const toggle =()=>{

        setisOn(!isOn);
        console.log(labels);
        console.log(`setTo${isOn}`);
    }

  return (
    <div>
      <div  className='size'>
            <span className={`setTo${isOn}`}>{labels}</span>
            <input onClick={toggle}  type="radio" name="size" />
            <input onClick={toggle}  type="radio" name="size" />
        </div>
    </div>
  )
}

export default Indivsize;
