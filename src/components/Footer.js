import React from 'react';
import Logo from '../assets/img/logoNoBg.png';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex items-center'>
        Copyright &copy; 2023. All rights reserved.
        <div className='flex items-center gap-x-3 flex-1 ml-96'>
          <a href="https://www.facebook.com/your-facebook-page-url" target="_blank" rel="noopener noreferrer">
            <div className='text-3xl text-white ml-6 social-icon hover:text-blue-500'> <FaFacebook /> </div>
          </a>
          <a href="https://www.youtube.com/your-youtube-channel-url" target="_blank" rel="noopener noreferrer">
            <div className='text-3xl text-white ml-6 social-icon hover:text-red-500'> <FaYoutube /> </div>
          </a>
          <a href="https://www.instagram.com/your-instagram-profile-url" target="_blank" rel="noopener noreferrer">
            <div className='text-3xl text-white ml-6 social-icon hover:text-pink-500'> <FaInstagram /> </div>
          </a>
          <a href="https://twitter.com/your-twitter-profile-url" target="_blank" rel="noopener noreferrer">
            <div className='text-3xl text-white ml-6 social-icon hover:text-blue-500'> <FaTwitter /> </div>
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;