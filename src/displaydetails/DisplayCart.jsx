import CartItem from "../components/CartItem";
import "../components/plants.css";
import { useShop } from "../context/PlantContext";

const DisplayCart = () => {
  const { cart } = useShop();
  if (!cart || cart.length === 0) {
    return (
      <section className="cart-container">
        <h2>Cart</h2>
        <p>Your cart is empty</p>
      </section>
    );
  }
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.map((plant) => (
        <CartItem key={plant.id} plant={plant} />
      ))}
    </div>
  );
};

export default DisplayCart;
