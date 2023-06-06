import React from 'react'
import styles from './Buy.module.css';
import { useNavigate } from "react-router-dom";


const Buy = ({ uponPay }) => {

    console.log(uponPay)
    const navigate = useNavigate();

    return (

        <div className={styles['buyForm']} >
            <div className={styles['field']}>
                <label>Card Number</label>
                <input type="number" />
            </div>

            <div className={styles['field']}>
                <label>Name on Card</label>
                <input type="text" />
            </div>

            <div className={styles['row']}>
                <div className={styles['field']}>
                    <label>Expiration Date</label>
                    <input type="date" />
                </div>

                <div className={styles['field']}>
                    <label>Security Code</label>
                    <input type="number" />
                </div>
            </div>


            {/* <div>
                <label>Security Code</label>
                <input type="number" />
            </div> */}


            <button  onClick={() => uponPay()} >Pay Now</button>
        </div>
    )
}


export default Buy;
