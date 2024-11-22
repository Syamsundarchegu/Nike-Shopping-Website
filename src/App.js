import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Quality from "./components/Quality";
import Services from "./components/Services";
import Offer from "./components/Offer";
import Customer from "./components/Customer";
import Connect from "./components/Connect";
import Fotter from "./components/Fotter";

function App() {
  return (
    <div className="App w-full">
      <Navbar />
      <Hero />
      <Products />
      <Quality />
      <Services />
      <Offer />
      <Customer />
      <Connect />
      <Fotter />
    </div>
  );
}

export default App;
