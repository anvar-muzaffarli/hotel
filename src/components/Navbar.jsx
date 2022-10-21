import React, { useRef } from 'react'
import {AiOutlineBars} from 'react-icons/ai'
import logo from '../assets/svgs/logo.svg'

import emailjs from '@emailjs/browser'

import {Link, Outlet} from 'react-router-dom'

const Navbar = () => {


  const buyBtnRef = useRef()
  const overlayRef = useRef()

  const form = useRef();

  const openDialogBox = (e)=> {
    const kliklenenElement = e.target

    if(kliklenenElement.classList.contains('button')) {
      overlayRef.current.classList.add('overlay-active')
    }
    
  }



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l863o2b', 'template_xjzydxe', form.current, 'user_XSVgRv73Ciboc6WRBgZW2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      form.current.reset()
      overlayRef.current.classList.remove('overlay-active')
  };


  return (
    <>

    <div className="overlay" ref={overlayRef}>
      <h1>Bizə müraciətini yolla</h1>
      <form action="" ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Adınız' className='form-control' />
        <input type="text" name='surname' placeholder="soyadınız" className='form-control'/>
        <input type="text" name='email' placeholder='elektron poçtunuz' className='form-control'/>
        <input type="text" name='subject' placeholder='Müraciət başlığı' className='form-control'/>
        <textarea placeholder='Müraciət mətnini daxil edin' name='message' className='form-control mt-2'/>
        <button className='btn btn-dark mt-4' type='submit'>Göndər</button>
      </form>
    </div>
    <nav class="navbar navbar-expand-lg p-3">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><img src={logo} alt="SEO" /></Link>
    <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <AiOutlineBars />
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
      <li class="nav-item">
          <Link class="nav-link" to="/">
            Home
          </Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link " to="/market-research">
            Market
          </Link>
          
        </li>
        <li class="nav-item">
          <Link to="/reserved" class="nav-link">
           Reserved Management
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/fastreport">
            Fast report
          </Link>
         
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/countsection">
            Feedback
          </Link>
         
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/download">
            Download
          </Link>     
        </li>

        <button className='button' ref={buyBtnRef} onClick={openDialogBox}>Buy Now</button>
      </ul>
    </div>
  </div>
</nav>
<Outlet />
</>
  )
}

export default Navbar