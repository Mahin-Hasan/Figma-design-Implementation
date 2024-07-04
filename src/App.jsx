import About from "./components/About"
import AllCompanies from "./components/AllCompanies"
import Companies from "./components/Companies"
import Dashboard from "./components/Dashboard"
import Footer from "./components/Footer"
import FutureListings from "./components/FutureListings"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Reports from "./components/Reports"
import Stories from "./components/Stories"


function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <Dashboard/>
        <AllCompanies/>
        <FutureListings/>
        <Reports/>
        <Stories/>
        <About/>
        <Companies/>
        <Footer/>
      </div>
    </>
  )
}

export default App
