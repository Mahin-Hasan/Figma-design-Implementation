import About from "./components/About";
import AllCompanies from "./components/AllCompanies";
import Companies from "./components/Companies";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import FutureListings from "./components/FutureListings";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Reports from "./components/Reports";
import Stories from "./components/Stories";
import { styles } from "./styles";

function App() {
  return (
    <>
      <div className="bg-primary">
          <Navbar />
        <div className={`${styles.fixedPadding}`}>
          <Home />
          <Dashboard />
          <AllCompanies />
        </div>
        <div className="container mx-auto">
          <FutureListings />
          <Reports />
          <Stories />
          <About />
          <Companies />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
