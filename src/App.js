import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import LoadingPage from "./components/LoagindPage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Selections from "./components/Home/Selections";

import UserContext from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    image: "",
    token: "",
  });

  const userInformation = { user, setUser };

  return (
    <UserContext.Provider value={userInformation}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:name" element={<Selections />} />
          {/* <Route path="/selection/:id" element={<Selections />} /> */}
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
