import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faCartShopping, faBell, faHome, faUser, faBars, faPerson } from '@fortawesome/free-solid-svg-icons';
import Product from './Product';
import data from "../assets/products.json";
import cardData from "../assets/flashcards.json";





const Homepage = () => {

    const [lookRange, setlookRange] = useState(false);
    const [sideBar, setsideBar] = useState(false);
    const [side, setside] = useState(false);
    const [range, setrange] = useState(false);

    const navigate = useNavigate();

    const products = data.map((item) => {
        return (
            <div onClick={() => {
                console.log('item  ', item);
                navigate(`/product/${item._id}`)
            }}>
                <img src={item.img}/>
                {/* {item.name} */}
            </div>

        )
    })


    const cards = cardData.map((item) => {
        return (
            <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${item.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "10px"}}>
                <h1>{item.offer}</h1>
                <p>{item.info}</p>
                <br/>
                <h4 style={{float:"left"}} >With Code {item.code}</h4>
                <button style={{borderRadius:"20px",backgroundColor:"black",float:"right", color:"white"}}>Get Now</button>
            </div>

        )
    })

    return (
        <div className={styles['home']}>
            <nav>
                {
                    (side || sideBar) &&
                    <div onMouseEnter={() => { setside(true) }} onMouseLeave={() => { setside(false) }} className={styles['side']}>
                        <p>Home</p>
                        <p>Orders</p>
                        <p>Account</p>
                        <p>Coupons</p>
                        <p>Settings</p>
                    </div>
                }

                <div onMouseEnter={() => { setsideBar(true) }} onMouseLeave={() => { setsideBar(false) }} className={styles['sidebar']}><FontAwesomeIcon icon={faBars} /></div>
                <div className={styles['profile']}>
                    <FontAwesomeIcon icon={faPerson} />
                </div>
            </nav>

            <div className={styles['header']}>
                <h1>Welcome</h1>
                <h3>Our Fashions App</h3>
            </div>

            <div className={styles['midBar']}>
                <div className={styles['search']}>
                    <span className='material-symbols-outlined'>
                        search
                    </span>
                    <input type="text" />
                </div>

                <div className={styles['ranger']}>
                    <FontAwesomeIcon onMouseEnter={() => {
                        setlookRange(true)
                    }} onMouseLeave={() => setlookRange(false)} icon={faSliders} size="2x" />
                    {
                        (lookRange || range) && <div onMouseEnter={() => { setrange(true) }} onMouseLeave={() => setrange(false)} className={styles['dropdown']}>

                            <div className={styles['option']}>
                                <label for="price">Price</label>
                                <input type="range" id="price" name="volume"
                                    min="1000" max="10000" />
                            </div>

                            <div className={styles['option']}>
                                <label for="size">Size</label>
                                <input type="range" id="size" name="cowbell"
                                    min="30" max="80" step="10" />
                            </div>
                        </div>
                    }

                </div>
            </div>



            <div className={styles['x-scroll']}>
                {cards}
            </div>

            <div className={styles['allProducts']}>
                {products}
            </div>

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


        </div >
    )
}

export default Homepage;
