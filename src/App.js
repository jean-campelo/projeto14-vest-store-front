import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import LoadingPage from "./components/LoagindPage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

import UserContext from "./contexts/UserContext";
<<<<<<< HEAD
import ViewProduct from "./components/ViewProduct";
=======
>>>>>>> main

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
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
<<<<<<< HEAD
          <Route path="/view-product" element={<ViewProduct />} />
=======
>>>>>>> main
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
