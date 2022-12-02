import React from "react";
import CartCards from "./components/CartCards";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import ToolsCards from "./components/ToolsCards";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <ToolsCards />
      <CartCards />
      {/* <Testimonials /> */}
    </>
  );
};

export default App;
