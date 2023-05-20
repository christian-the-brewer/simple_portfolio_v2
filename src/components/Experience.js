import React from 'react'
import { Container } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { IoMdSchool } from 'react-icons/io'
import "../styles/Experience.css"



function Experience() {
    
  return (
    <Container className='experience'>
        <VerticalTimeline 
        animate={ true }
        >
        <VerticalTimelineElement
        contentArrowStyle={ {display: "none"}}
        contentStyle={{ background: 'black', color: 'white', boxShadow: "none" }} className='vertical-timeline-element-education' date='June 2017 - Present'
            iconStyle={{background: "black", color: "#fff"}}
            icon={<IoMdSchool  />}
            >
                <h3>Micro Center Sales</h3>
                <p>Provide technology expertise for hardware and software sales</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            contentArrowStyle={ {display: "none"}}
            contentStyle={{ background: 'black', color: 'white', boxShadow: "none" }}className='vertical-timeline-element-education' date='June 2022'
            iconStyle={{background: "black", color: "#fff"}}
            icon={<IoMdSchool />}
            >
                <h3>First Website, Goblin Story</h3>
                <p>Browser RPG written in Javascript and HTML. Inspired by my love for DnD-based games.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            contentArrowStyle={ {display: "none"}}
            contentStyle={{ background: 'black', color: 'white', boxShadow: "none" }}className='vertical-timeline-element-education' date='June - August 2022'
            iconStyle={{background: "black", color: "#fff"}}
            icon={<IoMdSchool />}
            >
                <h3>General Assembly Software Engineering Immersive</h3>
                <p>Certificate</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            contentArrowStyle={ {display: "none"}}
            contentStyle={{ background: 'black', color: 'white', boxShadow: "none" }}className='vertical-timeline-element-education' date='September 2022'
            iconStyle={{background: "black", color: "#fff"}}
            icon={<IoMdSchool />}
            >
                <h3>Launched StreamGenie</h3>
                <p>MERN Web App for tracking streaming content across streaming services</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            contentArrowStyle={ {display: "none"}}
            contentStyle={{ background: 'black', color: 'white', boxShadow: "none" }}className='vertical-timeline-element-education'
            // date={`${currentDay}/${currentMonth}/${currentYear}`}
            date='Today'
            iconStyle={{background: "black", color: "#fff"}}
            icon={<IoMdSchool />}
            >
                <h3>The Day You Decide To Hire Me</h3>
                <p>I look forward to hearing from you. <a href="mailto:christian@thecodebrewer.com">Get in touch!</a></p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </Container>
  )
}

export default Experience