import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
//components 
import AdultsDropdown from '../components/AdultsDropdown'
import KidsDropdown from '../components/KidsDropdown'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'

//scroll to top
import ScrollToTop from '../components/ScrollToTop';
//context
import { RoomContext } from '../context/RoomContext';
//icons
import { FaCheck } from 'react-icons/fa';

const RoomDetails = () => {

  const {rooms} = useContext(RoomContext)
  const { id } = useParams()
  console.log(id);

  //get room
  const room = rooms.find(room => {
     return room.id === Number(id)
  })

  //destructure rooms
  const {name, description, facilities, imageLg, price} = room;


  return <section > 

    <ScrollToTop/>
    {/* banner */}
    <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>

    {/*Overlay*/}

    <div className='absolute w-full h-full bg-black/70'>  </div>

    {/*title*/}

      <h1 className='text-6xl text-white z-20 font-primary text-center'>{name} Details</h1>
    
    </div>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row h-full py-24'> 
      
      {/* Left */} 
      <div className='w-full h-full lg:w-[60%] px-6'>
        <h2 className='h2'> {name} </h2>
        <p>{description}</p>
        <img className='mb-8' src ={imageLg} alt = '' />
        {/* facilities */}

        <div className='mt-12'>
          <h3 className='h3 mb-3'>Room facilities</h3>
          <p className='mb-12'>  
          lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas
         unde veniam Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniamLorem 
         unde veniam Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniamLoremvoluptas

          </p>
         {/* grid */}
         <div className='grid grid-cols-3 gap-6 mb-12'>
           {facilities.map((item, index)=> {
             //destructure item
             const {name, icon} = item
             return (
              <div className='flex items-center gap-x-3 flex-1' key={index}>
                <div className='text-3xl text-accent'>{icon}</div>
                <div className='text-base text-accent'>{name}</div>
              </div>
             )
           })}
         </div>
        </div>
      </div>
      {/* Right */}
      <div className='w-full h-full lg:w-[40%]'>
        {/* reservation */}

        {/* rules */}
        <div className='pl-20'>
          <h3 className='h3'>Hotel Rules</h3>
          <p className='mb-6'>
            lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas
            un
          </p>
          <ul className='flex flex-col gap-y-4'>

            <li className='flex items-center gap-x-4'>
              <FaCheck/>
              Check-in: 3.00pm-9.00pm
            </li>

            <li className='flex items-center gap-x-4'>
              <FaCheck/>
              Check-in: 3.00pm-9.00pm
            </li>

            <li className='flex items-center gap-x-4'>
              <FaCheck/>
              Check-in: 3.00pm-9.00pm
            </li>

            <li className='flex items-center gap-x-4'>
              <FaCheck/>
              Check-in: 3.00pm-9.00pm
            </li>

          </ul>
        </div>
      </div>  

     </div>

    </div>
  
   </section>;
};

export default RoomDetails;
