import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
 
  return <div className='border-b border-neutral-700 pb-16'>
    <motion.h2 
    whileInView={{opacity: 1, y: 0}}
    initial={{opacity: 0, y: -100}}
    transition={{duration: 1}}
    className='my-20 text-center text-4xl'>About
        <span className='text-neutral-500'> Me</span>
    </motion.h2>
    <div 
    className='flex flex-col items-center lg:flex-row gap-8'>
        <motion.div
         whileInView= {{ opacity: 1, x: 0}}
         initial = {{opacity: 0, x: -100}}
         transition = {{duration: 1}}
        className='w-full lg:w-1/2 p-8 outer-shadow rounded-2xl'>
          
          <div className='w-full flex justify-center items-center gap-8'>
            <div className='w-1/2 btn-grad lg:p-4 xs:p-2'>
              <p className='lg:text-lg xs:text-sm font-semibold font-sans tracking-wide'>
                Tech enthusiast with a passion for development
              </p>
            </div>
            <div className='w-1/2 btn-grad lg:p-4 xs:p-2'>
              <p className='lg:text-lg xs:text-sm font-semibold font-sans tracking-wide'>
              Frontend development is my creative playground
              </p>
            </div>
          </div>
          <div className='mt-8 w-full flex justify-center items-center'>
            <div className='w-3/4 btn-grad lg:p-4 xs:p-2'>
              <p className='lg:text-lg xs:text-sm font-semibold font-sans tracking-wide'>
                In the world of tech, my curiosity fuels my passion and drives my growth
                </p>
            </div>
          </div>
        </motion.div>
          <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 0.5}}
          className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-start'>
              <p className='my-2 max-w-xl text-center lg:text-left  text-2xl leading-relaxed font-sans'>
              Hello! <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                bg-clip-text text-transparent font-bold"> I’m Atif Khan, </span>

               
                 <span> I specialize in </span> 
                  <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                bg-clip-text text-transparent font-bold"> HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, Git, Redux Toolkit, and Framer Motion </span>
                  
                  <span> for seamless web experiences. Currently, I’m exploring </span>
                  <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                bg-clip-text text-transparent font-bold"> backend development </span>
                  <span> with Express.js and enhancing my </span>
                  <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                bg-clip-text text-transparent font-bold"> design </span>
                  
                 <span> skills to create functional and visually appealing full-stack solutions. </span>
              </p>
            </div>
          </motion.div>
    </div>
  </div>
}

export default About


