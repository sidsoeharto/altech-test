import "./scss/main.scss";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Hero from "./components/landing/Hero";
import AboutUs from "./components/landing/AboutUs";
import Pricing from "./components/landing/Pricing";
import ContactUs from "./components/landing/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Pricing />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;