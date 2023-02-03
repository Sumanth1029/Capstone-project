import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Content/Main'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          {/* <Route exact path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
