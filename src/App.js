import React, { useState } from "react";
import CreateBlog from "./pages/CreateBlog";
import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";
import UserAuth from "./pages/UserAuth";
import Error from "./pages/Error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <>
      <Router>
        <Routes>
          {!isAuth ? (
            <Route path="/" element={<UserAuth setIsAuth={setIsAuth} />} />
          ) : (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/createblog" element={<CreateBlog />} />
              <Route path="*" element={<Error />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
