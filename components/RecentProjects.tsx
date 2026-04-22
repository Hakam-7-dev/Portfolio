import React from 'react'
import {projects} from "@/data";
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';
import { div } from 'three/src/nodes/math/OperatorNode.js';
const RecentProjects = () => {
  return (
      <div className='py-20'>
      <div>
      <h1 className='heading' id='projects'>
    A small selection of {""}
    <span className='text-purple-300'>
      recent projects
    </span>
      </h1>
      </div>
      <div className= "flex justify-center items-center p-4 gap-x-24 gap-y-8  mt-10 flex-wrap">
    {projects.map(({id,
title,
des,
img,
iconLists,
link}) => (
      <div key={id} className='sm:h-[41rem] h-[30rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
        <PinContainer title={title} href={link}>
          <div className='flex relative justify-center items-center sm:w-[570px] w-[80vw] h-[30vh] sm:h-[45vh] mb-10'>
            <div className='relative w-full h-full overflow-hidden rounded-3xl bg-[#13162d]'>
              <img src="/bg.png" alt="bg-img" />
            </div>
            <img src={img} alt={title} className = 'flex absolute max-w-lg'/>
          </div>
          <h1 className='font-bold lg:text-2xl md:text-xl sm:text-base line-clamp-1'>
            {title}
          </h1>
      <p className='font-extralight text-shadow-xs line-clamp-2 text-gray-400'>
        {des}
      </p>
      <div className='flex items-center justify-between mt-7 mb-3'>
    <div className='flex items-center'>
        {iconLists.map((icon, index) => (
          <div key={icon} className='border border-white/[0.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center me-4'
          style={{
            transform: `translateX(-${5  * index * 2}px)`
          }}
           >
            <img src={icon} alt={icon} className='p-1'/>
          </div>
        ))}
    </div>

        <div className='flex justify-center items-center'>
        <p className='flex lg:text-xl md:text-xs text-sm text-purple-300'>Check live site</p>
        <FaLocationArrow className='ms-3' color='#CBACF9'/>
        </div>

      </div>
        </PinContainer>
      </div>
    ))}
      </div>
    </div>
  )
}

export default RecentProjects
