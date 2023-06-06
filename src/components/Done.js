import React from 'react';
import styles from "./Done.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons';

const Done = () => {
    return (
        <div  className={styles['done']}>
            <FontAwesomeIcon icon={faCircleCheck} color='purple' size="4x"/>
            <p>Payment Done</p>
        </div>
    )
}

export default Done;
