import DisplayPlants from "./displaydetails/DisplayPlants";
import DisplayCart from "./displaydetails/DisplayCart";
import "./components/plants.css";

export default function App() {
  // const [plants] = useState(PLANTS);
  // const [cart, setCart] = useState([]);
  // console.log(plants);
  return (
    <>
      <h1>Proper Plants</h1>
      <div className="app-container">
        <DisplayPlants />
        <DisplayCart />
      </div>
    </>
  );
}
