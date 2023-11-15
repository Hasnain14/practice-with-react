import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/navigation/navigation'
import Header from './components/header_section/header'
import Button from './components/button/button'
import {BiMessageAltDetail} from "react-icons/bi"
import {BiSolidPhoneCall} from "react-icons/bi"
import {BiMailSend} from 'react-icons/bi';

function App() {
  
  const [name, setName] = useState("tamim")
  const [email, setEmail] = useState("tamim@emai.com")
  const [text, setText] = useState("tamim is a react lerner")


  const onSubmit = (event) => {
    event.preventDefault();
    
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }

  return (
    <>
      <div>
       <Navigation />

       <section className='container'>
       
       <Header />

      <div className="hero_section">
        <div className="from_section">
          <div className="btn_class ">
            <Button text="via support chat" iconBtn={< BiMessageAltDetail />}/>
            <Button text="via call" iconBtn={< BiSolidPhoneCall />}/>
          </div>
            <Button text="via email from" iconBtn={< BiMailSend />} isBig="true"/>

            <form onSubmit={onSubmit}>

              <div className="form_control">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' />
              </div>

              <div className="form_control">
              <label htmlFor="email">Email</label>
                <input type="email" name='email' />
              </div>

              <div className="form_control">              
              <label htmlFor="text">Text</label>
                <textarea name="text" id="" cols="10" rows="8"></textarea>
              </div>

              <div style={{display:'flex',justifyContent:'end'}}>
                <Button text="submit"/> 
              </div>

              <div style={{marginBottom:"20px"}}>
                <h1 style={{fontSize:"24px"}}>Name : {name}</h1> 
                <h2 style={{fontSize:"20px"}}>Email : {email}</h2>
                <p>{text}</p>
              </div>

            </form>
        </div>

        <div className="image_section">
            <img src="./images/hero-image.png" alt="hero image" />
        </div>
      </div>

        
       </section>

      </div>
    </>
  )
}



export default App
