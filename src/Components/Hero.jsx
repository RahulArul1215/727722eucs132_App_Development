import React from 'react'
import '../Styles/Hero.css'
import demo from '../Assets/youtubedemo.png';
import sec from '../Assets/Security.png'
import { useNavigate } from 'react-router-dom';


export const Hero = () => {

  const navigate = useNavigate();

  const handleVoteClick = () => {
    navigate('/voterpage'); // Adjust the path based on your route setup
  };
  const handleRegisterForm = () => {
    navigate('/publicRegister'); // Adjust the path based on your route setup
  };
  

  return (
    <div className='hero-section'>
      <div className='Hero-container1'>
                          <div className='container1-sub1'>
                                    <div className='Total-users'>
                                      <div className='TotalUserPlacer'>
                                      <div className='Total-usersdiv1'></div>
                                      <div className='Total-userdiv2'>
                                        <p className='Total-userdiv2-p1'> Total Users</p>
                                        <p className='Total-userdiv2-p2'>1.4 Billion</p>
                                      </div>
                                      </div>
                                    </div>

                                    <div className='Register'>
                                      <div className='Register-placer'>
                                        <div className='Register-div1'>
                                          <p>Into the World Of Blockchain</p>
                                          <button className='RegisterNow' onClick={handleRegisterForm}>Register</button>
                                        </div>
                                        <div className='Register-div2'>
                                          <img src={sec} className='secimg'></img>
                                        </div>
                                      </div>
                                    </div>
                          </div>
                          <div className='container1-sub2'>
                                    <h1 className="container1-sub2-title-text">
                                      Experience
                                      <span className="logosof-container1-sub2"><p className='logosof-container1-sub2-text'>Welcome to yourBlockchain Voting Platform</p></span>
                                      <br />
                                      <span className="container1-sub2-italic-text">the future</span> to Voting
                                    </h1>
                          </div>
                          <div className='container1-sub3'>
                                    <p className='container1-sub3-p'>Empowering democratic elections with<br/><span className='container1-sub3-p-span'>blockchain technology.</span></p>
                                    <div className='Arrow-placer'><div className='Arrow'/></div>
                                    <button className='REgister-button' onClick={handleVoteClick}>Vote Now</button>
                          </div>
      </div>
      <div className='Hero-container2'>
            <div className="vote-demo-card">
            <img src={demo} alt="Voting Demo" className="background-image" />
            <div className="overlay-text">
              <div className="main-text">
                <p>United<br/>
                India 2024</p>
              </div>
              <div className="vertical-line" />
              <div className="sub-text">
                <p>Watch a Quick<br/> Demo OF How To Vote</p>
              </div>
            </div>
      </div>
      </div>
    </div>

  )
}
