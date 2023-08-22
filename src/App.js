import { Routes, Route } from "react-router";

import { Header } from "./Frontend/Pages/Home/Header/Header";
import { Login } from "./Frontend/Pages/Login/Login";
import { Signup } from "./Frontend/Pages/Signup/Signup";
import { Join } from "./Frontend/Pages/Join/Join";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/aboutus" element={<Header />} />
        <Route path="/join" element={<Join />} />
        <Route path="/howitworks" element={<Header />} />
        <Route path="/services" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<>Page not found</>} />
      </Routes>
    </>
  );
}

export default App;
