import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./styles.jsx";
import {
  About,
  Blog, m,
  Donate,
  Error,
  Events,
  Gotham,
  Home,
  LitClub,
  Ministry,
  Resources,
  Test,
} from "./pages";
import { BlogPost, Header, Navbar } from "./components";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path="/blog">
          <Route index element={<Blog />} />
          <Route path=":blogId" element={<BlogPost />} />
        </Route>
        <Route path='/donate' element={<Donate />} />
        <Route path='/events' element={<Events />} />
        <Route path='/gotham' element={<Gotham />} />
        <Route path='/lit' element={<LitClub />} />
        <Route path='/ministry' element={<Ministry />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/test' element={<Test />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
