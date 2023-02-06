import React from 'react'
import { Container } from 'react-bootstrap'
import "../styles/Home.css"
import Carousel from 'react-bootstrap/Carousel';
import { Skills } from '../skills';

function Home() {
  return (
    <Container className='home' id='home'>
        <div className='skills_carousel'>
            <Carousel
            slide={false}
            indicators={false}
            controls={false}
            
            >
                {Skills.map((skill) => (
                    <Carousel.Item className='skills'><p>{skill}</p></Carousel.Item>))}
            </Carousel>
        </div>
        <div className='greeting'>
        {/* <Carousel
            slide={false}
            indicators={false}
            controls={false}
            
            >
            <Carousel.Item interval={570}><h2 style={{fontSize: "5vw"}}>Web Design.<br/> Software Development.</h2></Carousel.Item>
            <Carousel.Item interval={570}><h2 style={{fontSize: "5vw"}}>Web Design.<br/> Software Development.|</h2></Carousel.Item>
            </Carousel> */}
        <h2 style={{fontSize: "5vw"}}>Web Design.<br/> Software Development.</h2>
        </div>
    </Container>
  )
}

export default Home

