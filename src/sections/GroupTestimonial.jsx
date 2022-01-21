import { useState } from "react";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";
import { useScroll } from "../utils/useScroll";
import { motion } from "framer-motion";
import "../styles/sections/GroupTestimonial.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

export default function GroupTestimonial() {
  const [element, controls] = useScroll();

  const [SecondElement, ShowSecondElement] = useState(false);
  const [ThirdElement, ShowThirdElement] = useState(false);

  setTimeout(() => {
    ShowSecondElement(true);
  }, 500);
  setTimeout(() => {
    ShowThirdElement(true);
  }, 1000);
  return (
    <div className='testimonials-container' id='testimonial' ref={element}>
      <div className='container'>
        <motion.div
          className='title-container'
          variants={textAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title='Testimonials' color='white' lineCenter={true} />
          <p>See what our clients are saying about us.</p>
        </motion.div>
        <div className='testimonials'>
          <Testimonial
            content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, cum dolorum praesentium architecto facilis quasi incidunt labore neque dignissimos sapiente!'
            name='John Doe'
            designation='CEO'
            variants={cardAnimation}
            animate={controls}
          />

          {SecondElement && (
            <Testimonial
              content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, cum dolorum praesentium architecto facilis quasi incidunt labore neque dignissimos sapiente!'
              name='John Doe'
              designation='CEO'
              variants={cardAnimation}
              animate={controls}
            />
          )}

          {ThirdElement && (
            <Testimonial
              content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, cum dolorum praesentium architecto facilis quasi incidunt labore neque dignissimos sapiente!'
              name='John Doe'
              designation='CEO'
              variants={cardAnimation}
              animate={controls}
            />
          )}
        </div>
      </div>
    </div>
  );
}
