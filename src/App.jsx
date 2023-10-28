import Header from "./components/js/Header"
import "./components/css/main.css";
import "./components/css/stylesheet.css";
import Hero from "./components/js/Hero";
import Service from "./components/js/Services";
import Companies from "./components/js/Companies";
import Value from "./components/js/Value";
import Contact from "./components/js/Contact";
import GetStarted from "./components/js/GetStarted";
import Footer from "./components/js/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Service/>
      <Companies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>

    </div>
    
  );
}

export default App;
