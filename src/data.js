// rooms images
import Room1Img from './assets/img/rajaham-rooms/RoomN1.jpg';
import Room1ImgLg from './assets/img/rajaham-rooms/RoomN1.jpg';
import Room2Img from './assets/img/rajaham-rooms/RoomN1.jpg';
import Room2ImgLg from './assets/img/rajaham-rooms/RoomN1.jpg';
import Room3Img from './assets/img/rajaham-rooms/RoomN1.jpg';
import Room3ImgLg from './assets/img/rooms/3-lg.png';
import Room4Img from './assets/img/rajaham-rooms/RoomN1.jpg';
import Room4ImgLg from './assets/img/rajaham-rooms/RoomN1.jpg';
import Room5Img from './assets/img/rajaham-rooms/RoomN1.jpg';
import Room5ImgLg from './assets/img/rajaham-rooms/RoomN1.jpg';

// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from 'react-icons/fa';

export const roomData = [
  {
    id: 1,
    name: 'Superior Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 30,
    maxPerson: 3,
    price: 115,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: 'Signature Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 70,
    maxPerson: 3,
    price: 220,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: 'Deluxe Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 3,
    price: 265,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: 'Luxury Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 1,
    price: 289,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
  {
    id: 5,
    name: 'Luxury Suite Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 90,
    maxPerson: 1,
    price: 320,
    image: Room5Img,
    imageLg: Room5ImgLg,
  },

];
