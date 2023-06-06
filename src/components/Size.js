import React, { useState } from 'react'
import styles from './Size.module.css'

const sizeArr = ['S', 'M', 'L', 'XL', 'XXL'];

const Size = () => {


    const [selected, setselected] = useState('S');

    const isSelected = (option) => {
        console.log('isSelected  ',option,'  ',selected);
        return String(String(option) === String(selected));
    }


    const allSizes = sizeArr.map((item) => {
        return (
            <div className={styles['size']}>
                <span className={styles[isSelected(item)]}>{item}</span>
                <input onClick={() => {
                    console.log(item,'  : ',isSelected(item));
                    setselected(item);
                    // console.log(item,' ', isSelected(item));
                }
                } type="radio" name="size" />
            </div>
        )
    });

    return (
        <div className={styles['sizes']}>

            {allSizes}

        </div>
    )
}

export default Size;
