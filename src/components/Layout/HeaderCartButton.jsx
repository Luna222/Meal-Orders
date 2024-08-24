import styles from "./HeaderCartButton.module.css";

export default function HeaderCartButton({ cartQuantity, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <i className={`fa-solid fa-cart-shopping ${styles.icon}`}></i>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartQuantity}</span>
    </button>
  );
}
