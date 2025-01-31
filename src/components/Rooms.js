import React, {useContext} from 'react';
//loader
import { SpinnerDotted} from 'spinners-react'

import { RoomContext } from '../context/RoomContext';
//components
import Room from '../components/Room';

const Rooms = () => {

  const { rooms,loading } = useContext(RoomContext);
  
  return (
  <section className=' py-24'>
    {/* overlay and spinner */}
    {loading && (
      <div className='h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center'>
        <SpinnerDotted color='white'/>
      </div>
    )}
    <div className='container mx-auto lg:px-0 pt-20'>

      <div className='text-center'>
        <div className='font-tertiary uppercase text-[15px] tracking-[6px]'>Rajaham resort</div>
        <h2 className='font-primary text-[45px] mb-4'>Rooms</h2>
      </div>

      {/* grid */}
      <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:max-0'>
        {rooms.map(room => {
          
          return <Room room={room} key={room.id} />;
        })}
      </div>
    </div>
  </section>);
};

export default Rooms;
