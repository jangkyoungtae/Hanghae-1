import ShowWord from "./Page/ShowWord";
import { createGlobalStyle } from "styled-components/"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddWord from "./Page/AddWord";
import "./css/App.css";

const GlobalStyle = createGlobalStyle`  
  body{
    background-color: #cecece;
    
  } 
  
`


function App() {
  
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<ShowWord />} />      
        <Route path="/AddWord" element={<AddWord />} />
      </Routes>      
    </BrowserRouter>
  );
}


export default App;
