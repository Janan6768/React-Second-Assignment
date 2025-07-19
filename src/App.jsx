import "./App.css";
import Stock from "./components/practice/Stock";
import AvailibleStock from "./components/practice/AvailibleStock";
import SortingPrice from "./components/Assignments/SortingPrice";
import SortPriceGreaterThen from "./components/Assignments/SortPriceGreaterThen";
import IncreasePriceByTen from "./components/Assignments/IncreasePriceByTen";
import StartWithAlphabet from "./components/Assignments/StartWithAlphabet";
import ThreeMostExpProduct from "./components/Assignments/ThreeMostExpProduct";
import BelowAndAboveAvg from "./components/Assignments/BelowAndAboveAvg";

// ------------------------Practice Data----------------------------
function App() {
  let products = [
    {
      title: "LED",
      price: 2000,
      status: true,
    },
    {
      title: "Mobile",
      price: 1000,
      status: false,
    },
    {
      title: "Laptop",
      price: 5000,
      status: true,
    },
  ];
  // ------------------------Assignment Data-----------------------------
  let products2 = [
    {
      name: "Mobile",
      price: 60000,
      status: true,
      image: "/public/images/products/camera.jfif",
    },
    {
      name: "LED",
      price: 50000,
      status: true,
      image: "/public/images/products/camera.jfif",
    },
    {
      name: "Bike",
      price: 40000,
      status: false,
      image: "images/products/camera.jfif",
    },
    {
      name: "Car",
      price: 70000,
      status: true,
      image: "images/products/camera.jfif",
    },
    {
      name: "Laptop",
      price: 30000,
      status: false,
      image: "images/products/camera.jfif",
    },
  ];

  return (
    <>
      <Stock products={products} />
      <AvailibleStock products={products} />
      <SortingPrice products2={products2} />
      <SortPriceGreaterThen products2={products2}/>
      <IncreasePriceByTen products2={products2}/>
      <StartWithAlphabet products2={products2}/>
      <ThreeMostExpProduct products2={products2}/>
      <BelowAndAboveAvg products2={products2}/>
    </>
  );
}

export default App;
