import React from "react";
import Title from "../components/Title";
import { useScroll } from "../utils/useScroll";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import "../styles/sections/Video.scss";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
  listAnimation,
} from "../utils/Animations";

function Video() {
  const [element, controls] = useScroll();

  return (
    <div className='video-container' id='video' ref={element}>
      <div className='container'>
        <motion.div
          className='top'
          variants={topContainerAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title='Why Us ?' color='pink' lineCenter={true} />
          <div className='subTitle'>
            <p>
              Always stay updated with the technologies thus we help our clients
              by giving the best solutions for thier needs.
            </p>
          </div>
        </motion.div>
        <div className='content'>
          <motion.div
            variants={videoAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div className='video'>
              <GoPlay />
            </div>
          </motion.div>

          <div className='reasons'>
            <ul>
              <motion.li
                animate={controls}
                variants={listAnimation}
                transition={{ type: "opacity", duration: 0.5 }}
              >
                Over 10+ years of industry wide expierence
              </motion.li>
              <motion.li
                animate={controls}
                variants={listAnimation}
                transition={{ delay: 0.2, type: "opacity", duration: 0.5 }}
              >
                Provide solutions to our multiple global clients or website
                traffic generation and workflow
              </motion.li>
              <motion.li
                animate={controls}
                variants={listAnimation}
                transition={{ delay: 0.3, type: "opacity", duration: 0.5 }}
              >
                Strong team of 150+ creative people
              </motion.li>
              <motion.li
                animate={controls}
                variants={listAnimation}
                transition={{ delay: 1, type: "opacity", duration: 0.5 }}
              >
                99% adhere to service level contract
              </motion.li>
              <motion.li
                animate={controls}
                variants={listAnimation}
                transition={{ delay: 1, type: "opacity", duration: 0.5 }}
              >
                Ready to receive service request 24/7
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
