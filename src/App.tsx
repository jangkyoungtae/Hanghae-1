import ShowWord from "./Page/ShowWord";
import { createGlobalStyle } from "styled-components/"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddWord from "./Page/AddWord";


const GlobalStyle = createGlobalStyle`
  body{
    background-color: #CCFFFF;
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
