import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default App;
