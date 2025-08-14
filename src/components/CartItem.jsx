import { useShop } from "../context/PlantContext";

// ended up using a prop here because less code and its cleaner
const CartItem = ({ plant }) => {
  const { quantityIncrease, quantityDecrease } = useShop();

  //* different way so the component is self sufficient but less clean
  // const plant = cart.find((item) => item.id === id);

  // if (!plant) {
  //   return null;
  // }

  return (
    <div className="container">
      <section>
        {plant.image}
        {plant.name}
      </section>
      <main>
        <button onClick={() => quantityDecrease(plant.id)}>-</button>
        {plant.quantity}
        <button onClick={() => quantityIncrease(plant.id)}>+</button>
      </main>
    </div>
  );
};

export default CartItem;
