import { useShop } from "../context/PlantContext";
import "./plants.css";

// ended up using a prop here because less code and its cleaner
const CartItem = ({ plant }) => {
  const { quantityIncrease, quantityDecrease } = useShop();

  //* different way so the component is self sufficient but less clean
  // const plant = cart.find((item) => item.id === id);

  // if (!plant) {
  //   return null;
  // }

  return (
    <div className="cart-item">
      <section>
        <span className="emoji">{plant.image}</span>
        {plant.name}
      </section>
      <main>
        <button className="qty-btn" onClick={() => quantityDecrease(plant.id)}>
          -
        </button>
        <span className="qty">{plant.quantity}</span>
        <button className="qty-btn" onClick={() => quantityIncrease(plant.id)}>
          +
        </button>
      </main>
    </div>
  );
};

export default CartItem;
