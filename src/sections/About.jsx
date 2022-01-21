import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import { useScroll } from "../utils/useScroll";
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/sections/About.scss";
import { reveal } from "../utils/Animations";

function About() {
  const [element, controls] = useScroll();

  return (
    <div className='about-container' id='about' ref={element}>
      <div className='container'>
        <motion.div
          className='details'
          initial='hidden'
          animate='show'
          animate={controls}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title='About XXXX' color='blue' />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            expedita reprehenderit magnam obcaecati deserunt cum quaerat
            explicabo neque molestiae corrupti.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            suscipit.
          </p>
          <Button content='SEE MORE' />
        </motion.div>
        <div className='cards' ref={element}>
          <Card
            title='lorem ipsum'
            logo={<HiLightBulb />}
            animateCustom={controls}
          />
          <Card
            title='lorem ipsum'
            logo={<BsFillCalendarFill />}
            animateCustom={controls}
          />
          <Card
            title='lorem ipsum'
            logo={<BiSupport />}
            animateCustom={controls}
          />
          <Card
            title='lorem ipsum'
            logo={<SiGooglemessages />}
            animateCustom={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
