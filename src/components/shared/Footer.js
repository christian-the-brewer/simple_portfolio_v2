import React from 'react'
import { Container } from 'react-bootstrap'
import {AiOutlineMail, AiFillGithub, AiFillLinkedin, AiFillTwitterSquare} from 'react-icons/ai'
import "../../styles/Footer.css"

function Footer() {
  return (
    <Container>
        <div className='footer'>
        <div className='socialMedia'>
        <a href='https://github.com/christian-the-brewer'><AiFillGithub /></a>
           <a href='https://www.linkedin.com/in/christianbrewer/'><AiFillLinkedin /></a>
           <a href='https://twitter.com/the_code_brewer'><AiFillTwitterSquare /></a>
           <a href="mailto:the_code_brewer@proton.me"><AiOutlineMail /></a>
        </div>
        <p>&copy; 2023 thecodebrewer.com</p>
    </div>
    </Container>
  )
}

export default Footer

