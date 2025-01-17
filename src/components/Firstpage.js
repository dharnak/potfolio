import React from 'react'
import Mypic from '../Assets/img1.jpg'

export const Firstpage = () => {
  return (
    <div id='page1'>
        <div className='bg1 flex justify-center gap-40 pt-28'>
        <div className=''>
                <img className='mypic1' src={Mypic} alt='../'/>
             </div>
            <div>
                <h1 className='firstfont'>I am Dharneesh Thangavel</h1>
               <h1 className='secondfont'>Web Developer ++<br/>
                  MERN Developer</h1>
                  <h4 className='secondfont1'>I break down complex user experinece problems to create<br/> integritiy focussed solutions that connect billions<br/> of people</h4>
                  <div className='new pt-10 flex gap-6'>
                    <div>
                        <button className='cv'>Download CV <i class="fa-solid fa-download"></i> </button>
                    </div>
                    <div className='pt-2'>
                        <div className='circle1'><a href='https://www.instagram.com/bad_boy_d007/'><i class="fa-brands fa-instagram"></i></a></div>
                    </div>
                    <div className='pt-2'>
                        <div className='circle1'><a href='https://mail.google.com/mail/u/0/#inbox'><i class="fa-solid fa-envelope"></i></a></div>
                    </div>
                    <div className='pt-2'>
                        <div className='circle1'><a href='https://www.linkedin.com/in/dharneesh-thangavel-6062aa26a/'><i class="fa-brands fa-linkedin"></i></a></div>
                    </div>
                    <div className='pt-2'>
                       <div className='circle1'><a href='https://github.com/dharnak'><i class="fa-brands fa-github"></i></a></div>
                    </div>
                  </div>
            </div>
            <div className=''>
                <img className='mypic2' src={Mypic} alt='../'/>
             </div>

        </div>
    </div>
  )
}
