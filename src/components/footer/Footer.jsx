import React from 'react'
import './footer.scss'
import { Github, Linkedin, Twitter, Mail } from 'feather-icons-react/build/IconComponents';

const Footer = () => {
  let year = new Date();
  year = year.getFullYear();
  
  return (
    <footer>
      <div className='container--icons'>
        <a href='https://www.linkedin.com/in/mauricio-santos-rebolledo-9a0924137/' target='_blank' aria-label="Open Linkedin profile" className='container--icon'> <Linkedin className='icon' /> </a>
        <a href='https://github.com/MauricioSantos12' target='_blank' className='container--icon' aria-label="Open Github profile"> <Github className='icon' /> </a>
        <a href='https://twitter.com/Maurici89494430' target='_blank' className='container--icon' aria-label="Open Twitter profile"> <Twitter className='icon' /> </a>
        <a href="mailto:mauricio.santosr12@gmail.com" target='_blank' className='container--icon' aria-label="Open Mail to contact me"> <Mail className='icon' /> </a>
      </div>
    </footer>
    
  )
}

export default Footer