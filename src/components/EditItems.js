import React, { useState } from 'react';
import styles from './EditItems.module.css'

const EditItems = (props) => {
  const [items, setitems] = useState(1);
  const inc = () => {
    props.handleInc();
    setitems(items + 1);
  }

  const dec = () => {
    if (items > 0) {
      props.handleDec();
      setitems(items - 1);
    }
  }

  return (
    <div className={styles['counter']}>
      {/* <button onClick={inc}>+</button>
      <p className='count'>{items}</p>
      <button onClick={dec}>-</button> */}

      {/* <div> */}
        <div  onClick={inc}>+</div>
        <div>{items}</div>
        <div onClick={dec}>-</div>
      {/* </div> */}


    </div>
  )
}

export default EditItems;
