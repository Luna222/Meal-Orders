import { useContext } from "react";
import CartContext from "../../store/cart-context.jsx";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card.jsx";
import styles from "./AvailableMeals.module.css";

export default function AvailableMeals() {
  const { items } = useContext(CartContext);

  return (
    <div className={styles.meals}>
      <Card>
        <ul>
          {items.map((meal) => (
            <MealItem key={meal.id} {...meal} />
          ))}
        </ul>
      </Card>
    </div>
  );
}
