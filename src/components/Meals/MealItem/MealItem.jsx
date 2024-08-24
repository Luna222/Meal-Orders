import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  const totalItemPrice = props.price * props.amount;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>${totalItemPrice.toFixed(2)}</p>
      </div>
      <MealItemForm mealItem={props} />
    </li>
  );
}
