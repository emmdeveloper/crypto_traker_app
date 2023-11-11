/* import CoinList from "../components/CoinList";
 */
import Navbar from "./components/Navbar";
import CoinList from "./components/CoinList";

import Hero from "./components/Hero";

import Features from "./components/Features/Features";
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";
import GetNow from "./components/GetNow/GetNow";
import Footer from "./components/Footer";
function App() {
  return (
    <body className="bg_gradient min-h-full">
      <div className="mx-auto max-w-[1440px]">
        <Navbar />
        <main className="relative pt-10">
          <Hero />
          <Features />
          <About />
          <CoinList />
          <Reviews />
          <GetNow />
          <Footer />
        </main>
      </div>
    </body>
  );
}

export default App;
