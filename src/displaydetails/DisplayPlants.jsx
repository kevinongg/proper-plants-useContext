import PlantDetails from "../components/PlantDetails";
// import { useShop } from "../context/PlantContext";

const DisplayPlants = () => {
  // const { plants } = useShop();
  return (
    <section className="container">
      <h2>Plants</h2>
      <PlantDetails />
    </section>
  );
};

export default DisplayPlants;
