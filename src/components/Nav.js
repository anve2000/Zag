import React, { useState } from 'react';
import styles from './Nav.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faCartShopping, faBell, faHome, faUser, faBars, faPerson } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

  return (
        <div className={styles['downNav']}>
                <ul>
                    <li>
                        <div class='homeIcon'>
                            <FontAwesomeIcon icon={faHome} size='2xl' />
                            {/* <span>Home</span> */}
                        </div>
                    </li>

                    <li><FontAwesomeIcon icon={faCartShopping} size="2xl" /></li>
                    <li><FontAwesomeIcon icon={faBell} size="2xl" /></li>
                    <li><FontAwesomeIcon icon={faUser} size="2xl" /></li>
                </ul>
            </div >
  )
}

export default Nav;
