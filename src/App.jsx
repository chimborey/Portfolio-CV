import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Header from "./Page/Header";



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}