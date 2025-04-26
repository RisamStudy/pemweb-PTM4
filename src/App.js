// Impoprtv Libraries
import React, { useState } from "react"; 
import Header from "./Header.jsx"
import "./App.css";
import Footer from "./Footer.jsx";
import List from "./List.jsx"
import Top from "./Top.js"
import Main from "./Main.js";
import {Button} from "react-bootstrap";

// Membuat komponen dengan class

// Create Component
const App = () => {
  const [state,setState] = useState(0)

  const increase =()=>{
    setState (count=>count+1)
  }

  const decrease =()=>{
    setState (count=>count-1)
  }

  return (
    <div className="App">
      <Button varian='primary'>Testing</Button>
      <button onClick={increase}>Tambah</button>
      <br/>
        <span>{state}</span>
      <br/>
      <button onClick={decrease}>Kurang</button>
      <br/>
      <Header list = "10 Daftar Makanan"></Header>
      <Main/>
      <Top/>
      <List/>
      <Footer judul = 'halaman footer' nama = 'Fatichatus saadah'/>

    </div>
  );
};

//Export Default
export default App;
