import "./plants.css";
import { useShop } from "../context/PlantContext";

const PlantDetails = () => {
  const { plants, handleAddToCart } = useShop();

  return (
    <div>
      {plants.map((plant) => (
        <section className="plant-details" key={plant.id}>
          <figure>{plant.image}</figure>
          <p>{plant.name}</p>
          <button onClick={() => handleAddToCart(plant)}>Add to cart</button>
        </section>
      ))}
    </div>
  );
};

export default PlantDetails;
