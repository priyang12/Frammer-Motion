import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";

import "../styles/sections/Starter.scss";
import { useScroll } from "../utils/useScroll";
import { headerAnimation, imageAnimation } from "../utils/Animations";

export default function Starter() {
  const [element, controls] = useScroll();

  return (
    <div className='main-container' ref={element}>
      <Navbar />
      <div className='container'>
        <motion.div
          className='image'
          variants={imageAnimation}
          animate={controls}
          transition={{ type: "tween" }}
        >
          <img src='https://via.placeholder.com/1920x1080' alt='Work' />
        </motion.div>
        <motion.div
          className='content'
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, ut.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            molestiae modi itaque saepe iusto recusandae consequatur voluptates
            quis ab cumque.
          </p>
          <div className='button-container'>
            <a href='#video'>
              <Button content='Watch Video' icon={<GoPlay />} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
