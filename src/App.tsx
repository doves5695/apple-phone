import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Highlight from "./components/Highlights.tsx";
import Modal from "./components/Modal.tsx";
import Features from "./components/Features.tsx";
import HowItWorks from "./components/HowItWorks.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Modal />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default App
