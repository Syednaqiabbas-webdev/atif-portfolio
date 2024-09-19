import React from 'react'
import aboutImage from '../assets/aboutImage.png'
import {motion} from 'framer-motion'
import './roundImage.css'

const About = () => {
 
  return <div className='border-b border-neutral-900 pb-4'>
    <motion.h2 
    whileInView={{opacity: 1, y: 0}}
    initial={{opacity: 0, y: -100}}
    transition={{duration: 1}}
    className='my-20 text-center text-4xl'>About
        <span className='text-neutral-500'> Me</span>
    </motion.h2>
    <div 
    className='flex flex-col items-center lg:flex-row'>
        <motion.div
         whileInView= {{ opacity: 1, x: 0}}
         initial = {{opacity: 0, x: -100}}
         transition = {{duration: 1}}
        className='w-full lg:w-1/2 lg:p-8 flex justify-center round'>
          {/* <div className='flex justify-center round'> */}
            <img className='rounded-2xl w-3/4 md:1/2 lg:w-1/2 bg-white bg-grad' src={aboutImage} alt="about" />
          {/* </div> */}
        </motion.div>
          <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 0.5}}
          className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-start'>
              <p className='my-2 max-w-xl text-center lg:text-left py-6 text-xl leading-relaxed font-sans'>
              Hello! <b>I'm Atif Khan,</b>  a passionate <b>frontend developer</b> focused on creating dynamic, 
              responsive, and user-friendly web applications. 
              My expertise spans <b>HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, Git, 
              Redux Toolkit, and Framer Motion</b> for crafting seamless web experiences. 
              Currently, I’m also diving into <b>backend development</b> with <b>Express.js</b> and enhancing 
              my <b>design</b> skills to build <b>full-stack</b> solutions that are both functional and visually
              appealing. Let’s create something innovative together!
              </p>
            </div>
          </motion.div>
    </div>
  </div>
}

export default About
