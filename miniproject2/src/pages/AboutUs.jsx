import React from 'react'
import './aboutus.css'

function AboutUs () {
    return (
        <>
            <div className="section">
                <h2 className='head2'><i className='fa-solid fa-people-roof'></i> About</h2>
                <p className='about'>We are a boutique bookshop. Think of "You've Got Mail". Yep, that's us. <br/> Except we are tucked away off the main road of small town U.S.A. <br/> Come in, find a book, have a chat.</p>            
           
                <h2 className='head2'><i className='fa-solid fa-map-location-dot'></i> Location</h2>
                <address className='address'>
                    123 Around the Corner Lane<br/>
                    Smalltown, US<br/>
                    12345-9876<br/>
                </address>           
            
                <h2 className='head2'><i className='fa-solid fa-comment-dots'></i> Connect</h2>
                <p className='about'> Call: (987) 654-3210</p>
                <p className='about'> Email:<a href="mailto:thebooknook@booknook.com"> thebooknook@booknook.net</a></p>
                <p className='head2'> <i className="fa-brands fa-square-facebook"></i> <i className="fa-brands fa-square-instagram"></i> <i class="fa-brands fa-square-x-twitter"></i> </p>
            </div>       
    
        </>

    )
}

export default AboutUs