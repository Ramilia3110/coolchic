import Header from "./components/Header";
import Landing from "./components/Landing";
import Category from "./components/Category";
import Offer from "./components/Offer";
import Summer from "./components/Summer";
import Newcollection from "./components/Newcollection";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import women from "./data/data";
import men from "./data/data2";

import './App.scss';

function App() {
  return (
    <div className="App" id="home">
      <Header/>
     <Landing />
     <div id ='women'>  <Category category={women} title="women" /></div>
     <Offer/>
     <Summer/>
     <Newcollection/>
     <div id="men">  <Category category={men} title="men"/></div>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
