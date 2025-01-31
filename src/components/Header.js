import React, {useState, useEffect} from 'react';
import logo from '../assets/img/logoWhite.png'
import logoTrial1 from '../assets/img/logo-dark.svg'
import logoTrial2 from '../assets/img/logo-white.svg'

 



const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(()=>{

    window.addEventListener('scroll', ()=> {

      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
    
    
  })


  return (

    <header className = {`${ header ? 'bg-white shadow-lg pb-8 pt-8 ' : 'bg-transparent py-8' } fixed z-50 w-full transition-all duration-300 ` } > 

      <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
        {/* Logo */}
        <a href='/'>

           {header ? (<img className='w-[160px]'/> ): (<img className='w-[160px]'  />)}  

        </a>
        {/*nav*/}
        <nav className={`${header ? 'text-primary': 'text-white'} flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}>
   
          <a href='' className='hover:text-accent transition'>
            Home
          </a>

          <a href='' className='hover:text-accent transition'>
            Rooms
          </a>

          <a href='' className='hover:text-accent transition'>
            About
          </a>

          <a href='' className='hover:text-accent transition'>
            Contacts
          </a>

        </nav>
      </div> 
      
    </header>

  );
};

export default Header;
