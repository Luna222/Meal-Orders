import { useRef, useContext } from "react";
import CartContext from "../../store/cart-context";
import bannerImg from "../../../public/assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import CartModal from "../Cart/CartModal";
import styles from "./Header.module.css";

export default function Header() {
  const modalRef = useRef();
  const { items } = useContext(CartContext);

  function handleOpenCartClick() {
    modalRef.current.open();
  }

  const cartQuantity = items.length;

  let modalActions = <button>Close</button>;
  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Order</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modalRef} actions={modalActions} />
      <header className={styles.header}>
        <a href="#">
          <h1>ReactMeals</h1>
        </a>
        <HeaderCartButton
          cartQuantity={cartQuantity}
          onClick={handleOpenCartClick}
        />
      </header>
      <div className={styles["main-image"]}>
        <img src={bannerImg} alt="banner" />
      </div>
    </>
  );
}
