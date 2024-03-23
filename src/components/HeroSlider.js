import React from 'react';
//import swiper react component
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade'
//import required modules
import {EffectFade, Autoplay} from 'swiper'
//images
import  Img1 from '../assets/img/Rajaham slider/front-yard.jpeg'
import  Img2 from '../assets/img/Rajaham slider/IMG-20230921-WA0100.jpg'
import  Img3 from '../assets/img/Rajaham slider/IMG-20230921-WA0110.jpg'
import  Img4 from '../assets/img/Rajaham slider/IMG-20230921-WA0060.jpg'

const slides = [
  {
    title: 'Rajaham Resort',
    bg: Img1,
    btnText: 'See our rooms'
  },

  {
    title: 'Rajaham Resort',
    bg: Img2,
    btnText: 'See our rooms'
  },

  {
    title: 'Rajaham Resort',
    bg: Img3,
    btnText: 'See our rooms'
  },
  {
    title: 'Rajaham Resort',
    bg: Img4,
    btnText: 'See our rooms'
  }
]

const HeroSlider = () => {
  return(
    <Swiper modules={[EffectFade, Autoplay]} effect={'fade'} loop = {true} autoplay = {{
      delay:3000,
      disableOnInteraction: false,
    }}  className='heroSlider h-[600px] lg:h-[940px]'>
      {slides.map((slide, index)=>{
        //destructure slides
        const  {title,bg,btnText} = slide
        return <SwiperSlide className='h-full relative flex justify-center items-center' key={index}>
          <div className='z-20 text-white text-center'>

            <div className='uppercase font-tertiary tracking-[6px] mb-5'>
              
              Just enjoy and relax
              
            </div>

            <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6'> {title} </h1>

            <button className='btn btn-lg btn-primary mx-auto'>{btnText}</button>

          </div>
            
            
          <div className='absolute top-0 w-full h-full'>
            <img className='object-cover  h-full w-full' src = {bg}/>
          </div>
          {/* overlay */}
          <div className='absolute w-full h-full bg-black/40'></div>
        </SwiperSlide>
      })}
    </Swiper>
  );
};

export default HeroSlider;
