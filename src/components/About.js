import React from 'react'
import { Container } from 'react-bootstrap'
import "../styles/About.css"

function About() {
  return (
    <Container className='about' id='about'>
        <p><span style={{color: "green"}}>christian@thecodebrewer</span>:<span style={{color: "steelblue"}}>~/homepage/about</span>$ cat about.txt</p>
        <p>Hello! I am Christian Brewer, a programmer and musician from Boston, Massachusetts.</p>
        <p>I am deeply interested in the way things work, and that curiosity has driven me to take apart and repair all sorts of mechanical and electronic devices: everything from motorcycles to vintage sewing machines, modding gameboys and repairing electronics, to creating websites, games, and useful computer programs.</p>
        <p>I have spent the last 15 years in sales, where I have developed meaningful customer relationships and honed my communication skills in order to help a wide wariety of clients meet their needs most effectively. I bring all of that experience in human-to-human interaction to my work as a developer. Whether I am working with a team or with clients, my first-class interpersonal skills bolster my passion for building, repairing, and maintaining code.</p>
        <p>Get in touch with me via email @ <a href='mailto:christian@thecodebrewer.com'>christian@thecodebrewer.com</a> or connect on <a href='https://www.linkedin.com/in/christianbrewer/'>Linkedin</a></p>
        <p><span style={{color: "green"}}>christian@thecodebrewer</span>:<span style={{color: "steelblue"}}>~/homepage/about</span>$</p>
    </Container>
  )
}

export default About

// christian@thecodebrewer:~/homepage/about$ cat about.txt

// Hello! I am Christian Brewer, a programmer and muscican from Boston, Massachusetts

//I have always been fascinated by technology, and that interst has driven me to take apart and repair all sorts of mechanical and electronic things; everything from motorcycles to vintage sewing machines, modding gameboys and repairing electronics, to creating websites, games, and useful computer programs.

//I have spent the last 15 years in sales, developing meaningful relationships with people to help them find the right products for their situation. I bring all of that experience in human to human interaction to my work as a developer. Whether it is working with a team or clients, I bring first class interpersonal skills along with my passion for building, repairing, and maintaining code.

//Get in touch with me via email @ christian@thecodebrewer.com or connect on Linkedin