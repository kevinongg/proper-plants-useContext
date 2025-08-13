import CartItem from "../components/CartItem";
import "../components/plants.css";

const DisplayCart = ({ cart, setCart }) => {
  if (!cart || cart.length === 0) {
    return (
      <section className="container">
        <h2>Cart</h2>
        <p>Your cart is empty</p>
      </section>
    );
  }
  return (
    <div className="container">
      <h2>Cart</h2>
      {cart.map((plant) => (
        <CartItem key={plant.id} plant={plant} setCart={setCart} />
      ))}
    </div>
  );
};

export default DisplayCart;
