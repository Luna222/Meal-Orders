import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import styles from "./CartItem.module.css";

const stepAmount = 1;

export default function CartItem(props) {
  const { addItem, removeItem } = useContext(CartContext);
  const totalItemPrice = props.price * props.amount;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>${totalItemPrice.toFixed(2)}</span>
          <span className={styles.amount}>x&nbsp;{props.amount}</span>
        </div>
      </div>

      <div className={styles["item-actions"]}>
        <button onClick={() => removeItem(props.id, stepAmount)}>-</button>
        <button onClick={() => addItem(props, stepAmount)}>+</button>
      </div>
    </li>
  );
}
