import PlantDetails from "../components/PlantDetails";
import "../components/plants.css";
// import { useShop } from "../context/PlantContext";

const DisplayPlants = () => {
  // const { plants } = useShop();
  return (
    <section className="plant-container">
      <h2>Plants</h2>
      <div className="plant-details-container">
        <PlantDetails />
      </div>
    </section>
  );
};

export default DisplayPlants;
