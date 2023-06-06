import React, { useEffect, useState } from 'react';
import styles from './Pay.module.css'
import { FadeLoader, ClipLoader } from "react-spinners";
import Done from './Done';
import Product from './Product';



const Pay = ({success}) => {
    const [keepLoad, setkeepLoad] = useState(false);

    
    useEffect(() => {
        setkeepLoad(true);
        setTimeout(() => {
            setkeepLoad(false);
            success();
        }, 4000);
        
    }, []);

    return (
        <div className={styles['pay']}>
            <FadeLoader loading={keepLoad}/>
        </div>
    )
}

export default Pay;
