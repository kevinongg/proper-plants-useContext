import DisplayPlants from "./displaydetails/DisplayPlants";
import DisplayCart from "./displaydetails/DisplayCart";

export default function App() {
  // const [plants] = useState(PLANTS);
  // const [cart, setCart] = useState([]);
  // console.log(plants);
  return (
    <>
      <h1>Proper Plants</h1>
      <DisplayPlants />
      <DisplayCart />
    </>
  );
}
