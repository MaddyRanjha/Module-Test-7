import React from 'react'
import './footer.css'

function Footer() {
    const [userEmail, setUserEmail] =React.useState('')
    const handleSubmitFeedback=()=>{

    
        fetch('https://learning-reactjs-9c95e-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json',
        {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            userEmail: userEmail,
          })
        }
        )
        .then(res => res.json())
        .then(data =>{
          // console.log(data)
          setUserEmail('')
          // alert("feedback submittted successfully")
        })
      }
  return (
    <>
    <div className='footer'>
        <div className='firstLayer'>
            <div className='logoName'><h2>AccioJob</h2></div>
            <div className='socialMedia'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
        <hr ></hr>
        <div className='secondLayer'>
            <div className='companyInfo footerServices'>
                <h4>Company Info</h4>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are Hiring</p>
                <p>Blog</p>
            </div>
            <div className='legal footerServices'>
                <h4>Legal</h4>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are Hiring</p>
                <p>Blog</p>
            </div>
            <div className='features footerServices'>
                <h4>Features</h4>
                <p>Business Marketing</p>
                <p>User Analytics</p>
                <p>Live Chat</p>
                <p>Unlimited Support</p>
            </div>
            <div className='Resources footerServices'>
                <h4>Resources</h4>
                <p>IOS and Android</p>
                <p>Watch a Demo</p>
                <p>Customers</p>
                <p>API</p>
            </div>
            <div className='getInTouch footerServices'>
                <h4>Get In Touch</h4>
                <div className='emailSection'>
                <input type="text" className='inputField' placeholder='Your Email' value={userEmail}
                onChange={(e)=> setUserEmail(e.target.value)}></input>
                <button className='suscribeButton' onClick={handleSubmitFeedback}>Suscribe</button>
                </div>
                <p>Lorem ipsum dolo amit</p>
            </div>
            
        </div>
        
    </div>
    <div className='lowerFooter'><p>Made with <i class="fa-sharp fa-solid fa-heart"></i> at AccioJob</p></div>
    </>
  )
}

export default Footer