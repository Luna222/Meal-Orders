import { forwardRef, useImperativeHandle, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import CartContext from "../../store/cart-context";
import styles from "./CartModal.module.css";
import CartItem from "./CartItem";

const CartModal = forwardRef(function CartModal({ actions }, ref) {
  const dialogRef = useRef();
  const { items } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  useImperativeHandle(
    ref,
    () => {
      return {
        open: () => {
          dialogRef.current.showModal();
        },
      };
    },
    []
  );

  return createPortal(
    <dialog id={styles.modal} ref={dialogRef}>
      {/* fallbackText */}
      {items.length === 0 && <p>No items in cart! 🍽</p>}

      <ul className={styles["cart-items"]}>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
      <p className={styles.total}>
        Total Amount: <strong>${totalPrice.toFixed(2)}</strong>
      </p>

      <form method="dialog" className={styles["modal-actions"]}>
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default CartModal;
