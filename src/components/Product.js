import React, { useEffect, useState } from 'react'
import styles from "./Product.module.css";
import EditItems from './EditItems';
import { useNavigate, useParams } from "react-router-dom";
import data from "../assets/products.json";

import Size from "./Size";

const Product = () => {

  const navigate = useNavigate();
  const params = useParams();

  // const array = JSON.parse(data);
  const [product, setproduct] = useState(
    {
      _id: '',
      name: '',
      price: '',
      brand: ''
    }
  );

  const [totalPrice, settotalPrice] = useState(0);

  const id = params.id;
  console.log('params ', params);

  console.log('id ', id);

  console.log(data);
  useEffect(() => {
    console.log('Anu');
    const item = data.find(ele => ele._id === id);
    console.log(item);
    settotalPrice(item.price)
    setproduct(item);
  }, [])

  const handleInc = () => {
    settotalPrice(parseFloat(totalPrice) + parseFloat(product.price));
  }

  const handleDec = () => {
    settotalPrice(parseFloat(totalPrice) - parseFloat(product.price));
  }

  return (

    <div className={styles['product']}>
      <div className={styles['picture']}>
          <img src={product.img} alt={product.name} />
      </div>

      <div className={styles['midRow']}>

        <div className={styles['row1']}>
          <h1>{product.brand}</h1>
          <p>{product.name}</p>
          <h3>$ {product.price}</h3>
        </div>

        <div className={styles['row2']}>
          <EditItems handleInc={handleInc} handleDec={handleDec} />
        </div>

      </div>

      <div className={styles['sizer']}>
        <Size />
      </div>


      <div className={styles['desc']}>
        <h2>Description</h2>
        <p>Lorem Ipsum</p>
      </div>

      <div className={styles['lastRow']}>
      <p>Total Price: <span>${totalPrice} </span> </p>
      <button onClick={() => { navigate('/paymentpage') }}>Buy Now</button>
      </div>

    </div>
  )
}

export default Product;
