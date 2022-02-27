import { useContext } from "react";

import { CartContext } from "../../cart-context";

const Navigation = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);

  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <nav className="navigation-bar">
      <div className="cart-icon" onClick={toggleCart}>
        Cart
      </div>
    </nav>
  );
};

export default Navigation;
