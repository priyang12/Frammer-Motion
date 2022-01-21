import React from "react";
import Button from "./Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import "../styles/components/Blog.scss";

function Blog({ title, subTitle, variants, animate }) {
  return (
    <motion.div
      className='blog-container'
      variants={variants}
      animate={animate}
    >
      <div className='content'>
        <div className='title'>
          <h3>{title}</h3>
        </div>
        <Button
          content='Read more'
          color='blue'
          icon={<HiOutlineArrowNarrowRight />}
        />
      </div>
      <div className='image'>
        <img src='https://via.placeholder.com/150' alt='Blog' />
      </div>
    </motion.div>
  );
}

export default Blog;
