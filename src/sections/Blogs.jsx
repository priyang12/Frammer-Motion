import React from "react";
import Blog from "../components/Blog";
import Button from "../components/Button";
import Title from "../components/Title";
import { useScroll } from "../utils/useScroll";
import { motion } from "framer-motion";

import "../styles/sections/Blogs.scss";
import { textAnimation, cardAnimation2 } from "../utils/Animations";

function Blogs() {
  const [element, controls] = useScroll();

  return (
    <div className='blogs-container' id='blog' ref={element}>
      <div className='container'>
        <motion.div
          className='title-container'
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <div className='heading'>
            <Title title='Blogs' color='pink' lineCenter={true} />
            <Button content='View All' />
          </div>

          <p>Insights and advice from our experts.</p>
        </motion.div>
        <div className='blogs'>
          <Blog
            title='Top list of Mistakes to Avoid During MVP Development'
            variants={cardAnimation2}
            animate={controls}
          />
          <Blog
            title='A Day in the life on an Engineering Manager'
            variants={cardAnimation2}
            animate={controls}
          />
          <Blog
            title='How to Build a Strong Remote Work Culture'
            variants={cardAnimation2}
            animate={controls}
          />
        </div>
        <div
          className='button-container'
          variants={textAnimation}
          animate={controls}
        ></div>
      </div>
    </div>
  );
}

export default Blogs;
