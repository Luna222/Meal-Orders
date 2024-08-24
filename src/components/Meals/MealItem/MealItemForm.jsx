import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import styles from "./MealItemForm.module.css";

const stepAmount = 1;

export default function MealItemForm({ mealItem }) {
  const { items, addItem, removeItem } = useContext(CartContext);
  let totalItemAmount = items.find((item) => item.id === mealItem.id).amount;

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(mealItem, stepAmount);
  };

  const handleSubtract = (e) => {
    e.preventDefault();
    removeItem(mealItem.id, stepAmount);
  };

  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          value={totalItemAmount}
          min="1"
          // defaultValue="1"
          readOnly={true}
        />
      </div>

      <div>
        <button onClick={handleAdd}>+Add</button>
        <button onClick={handleSubtract}>-Sub</button>
      </div>
    </form>
  );
}
