import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
            <div className='w-full absolute left-0 -bottom-72 min-h-96'>
                <img 
                src="/footer-grid.svg" 
                alt="grid"
                className='w-full h-full opacity-100'
                />
            </div>
            <div className='felx flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw] mx-auto '>
                Ready to take <span className='text-purple-300'>your</span> digital 
                presence to next level?
            </h1>
            <p className='text-white md:mt-10 my-5 text-center'>
                Reach out and let&apos;s turn ideas into something better together.
            </p>
            <a href="mailto:hakam.hammoud8gmail.com" className='text-center'>
                <MagicButton 
                title='Let&apos;s get in touch'
                icon = {<FaLocationArrow />}
                position='right'
                />
            </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base md:font-normal font-light text-sm'>Copyright © 2026 Hakam</p>
                <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map(({id, img, link
                }) => (
                    <div key={id} className='w-10 h-10 cursor-pointer flex items-center 
                    justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-[#020024] rounded-lg border-black'>
                        <a href={link} target='_blank'>
                            <img src={img} alt={String(id)} width={20} height={20}/>
                        </a>
                    </div>
                ))}
                </div>
            </div>

        </footer>
    )
}

export default Footer