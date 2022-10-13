import React from 'react'
import {Link} from 'react-router-dom'

function Resume(){
    return (
        <div className='section resume'>
            <h1>Resume</h1>
            <div className='content'>
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript Programming</li>
                    <li>React JS Programming</li>
                    <li>Vue JS Programming</li>
                    <li>Angular JS Programming</li>
                    <li>Node JS Programming</li>
                    <li>Progressive Web App</li>
                </ul>
                <Link to="../assets/Resume.docx" target="_blank" download>Download Resume</Link>
            </div>
        </div>
    )
}

export default Resume;
