import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./styles.jsx";
import {
  About,
  Blog,
  Contact,
  Donate,
  Error,
  Events,
  Membership,
  Home,
  LitClub,
  Ministry,
  Resources,
  Satanism,
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
        <Route path='/contact' element={<Contact />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/events' element={<Events />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/lit-club' element={<LitClub />} />
        <Route path='/ministry' element={<Ministry />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/satanism' element={<Satanism />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
