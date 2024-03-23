import React from "react";
import {MdPlace} from 'react-icons/md'
import Contact from "./Contacts";


export default function ContactSection( {

    icon = <MdPlace />,
    text = "This is just info",

})   {

return(
    <div className='text-center pt-20'>
    
        <div className='font-tertiary uppercase text-[15px] tracking-[6px]'>
          Rajaham resort
        </div>
        <h2 className='font-primary text-[45px] mb-4'>Contacts</h2>

        <div className="p-8 bg-gray-300 flex items-center gap-8 rounded-lg mb-8">
            <div className="icon">{icon}</div>
            <div className="info">  {text} </div>
        </div>

        <div className="p-8 bg-gray-300 flex items-center gap-8 rounded-lg mb-8">
            <div className="icon">{icon}</div>
            <div className="info">  {text} </div>
        </div>

        <div className="p-8 bg-gray-300 flex items-center gap-8 rounded-lg mb-8">
            <div className="icon">{icon}</div>
            <div className="info">  {text} </div>
        </div>

        <Contact  />

    </div>
      

      
    )
}