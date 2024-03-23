import React from 'react';

import { useState, Context, useEffect } from 'react';
//Data
import{roomData} from "../data"
import { createContext } from 'react';

//create context
export const RoomContext = createContext()


const RoomProvider = ({children}) => {

  const [rooms, setRooms] = useState(roomData);
  const[adults, setAdults] = useState('1 Adult')
  const[kids, setKids] = useState('0 Kids') 
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setTotal(Number(adults[0]) + Number(kids[0]))
  })
 
  const handleClick = (e) =>{

    e.preventDefault();

    setLoading(true)

    //filter based on total
    const filteredRooms = roomData.filter(room => { /*Had a though of using rooms instead of roomdData but cant use rooms instead of roomData cuz tthe state gets updated(in line 14) and cannot be reverted*/
      return total <= room.maxPerson
    })
    setTimeout(()=>{
      setRooms(filteredRooms)
      setLoading(false)
    },3000)

    

  }

  return (
  <RoomContext.Provider value={ {rooms, adults, setAdults, kids, setKids, handleClick, loading} }>
    {children}
  </RoomContext.Provider>
  );
};

export default RoomProvider;
