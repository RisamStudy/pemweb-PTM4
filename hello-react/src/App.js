// Impoprtv Libraries
import React from "react"; 
import Header from "./Header.jsx"
import "./App.css";
import Footer from "./Footer.jsx";
import List from "./List.jsx"


// Membuat komponen dengan class

// Create Component
const App = () => {
  return (
    <div>
      <h1>Makanan Khas Indonesia</h1>
      <List />
      <Header/>
      <Footer/>

    </div>
  );
};

//Export Default
export default App;
