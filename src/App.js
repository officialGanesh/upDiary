import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer";
import LogInSignup from "./components/LogInSignup";

function App() {
  return (
    <>
    {/* Header */}
    <Header />

    {/* Show log in or sign page / index page*/}
    <LogInSignup />

    {/* Footer */}
    <Footer />

    </>
  );
}

export default App;
