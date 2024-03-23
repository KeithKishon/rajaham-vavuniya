import React from 'react';
//components
import Rooms from '../components/Rooms'
import BookForm from '../components/BookForm'
import HeroSlider from '../components/HeroSlider';
import Gallery from '../components/Gallery.tsx';

//images
import gimg1 from "../assets/img/Gallery/IMG-20230921-WA0032.jpg"
import gimg2 from "../assets/img/Gallery/rabboz.jpg"
import gimg3 from "../assets/img/Gallery/lovebirdsRajaham.jpg"
import gimg4 from "../assets/img/Gallery/IMG-20230921-WA0112.jpg"
import gimg5 from "../assets/img/heroSlider/3.jpg"
import ContactSection from '../components/ContactSection.js';


const images = [gimg1, gimg2, gimg3, gimg4, gimg5]

const Home = () => {
  return (
    <>
      <HeroSlider/>
      <div className='container mx-auto relative'>
        <div className='bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12'>
          <BookForm />
        </div>
        
      </div>
      
      <Rooms />

      <div style={{maxWidth: "850px",
                width: "100%",
                height: "100%",
                aspectRatio: "10 / 6",
                margin: "0 auto",
                }}>
      <Gallery imageUrls = {images} />

      <ContactSection />
    </div>
    </>
  )
};

export default Home;
