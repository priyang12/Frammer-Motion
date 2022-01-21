import React from "react";
import GroupTestimonial from "./sections/GroupTestimonial";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Starter from "./sections/Starter";
import Video from "./sections/Video";
import Blogs from "././sections/Blogs";
import ScrollToTop from "./components/ScrollToTop";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div initial='hidden' animate='show'>
      <ScrollToTop />
      <Starter />
      <About />
      <Video />
      <GroupTestimonial />
      <Blogs />
      <Footer />
    </motion.div>
  );
}

export default App;
