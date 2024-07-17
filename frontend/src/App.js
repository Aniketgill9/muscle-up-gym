import React, { Suspense } from "react";
import { Route, Routes } from "react-router";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";


// const Membership = React.lazy(() => import("./components/Membership/Membership"));

const About = React.lazy(() => import("./components/about/About"));
const Classes = React.lazy(() => import("./components/classes/Classes"));
const YogaClass = React.lazy(() => import("./components/yogaClass/YogaClass"));

const Contact = React.lazy(() => import("./components/contact/Contact"));
const Schedule = React.lazy(() => import("./components/schedule/Schedule"));
const Signup = React.lazy(() => import("./components/signup/Signup"));
// const Calculator = React.lazy(() =>
//   import("./components/calculator/Calculator")
// );

const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="classes" element={<Classes />} />
          <Route path="about" element={<About />} />
          <Route path="yogaClass" element={<YogaClass />} /> 
          <Route path="contact" element={<Contact />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="Signup" element={<Signup />} />
          
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
