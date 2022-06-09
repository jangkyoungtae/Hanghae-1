import ShowWord from "./Page/ShowWord";
import { createGlobalStyle } from "styled-components/"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddWord from "./Page/AddWord";
import "./css/App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const GlobalStyle = createGlobalStyle`  
  body{
    background-color: #cecece;
    
  } 
  
`
const queryClient = new QueryClient()

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<ShowWord />} />      
          <Route path="/AddWord" element={<AddWord />} />
        </Routes>      
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}


export default App;
