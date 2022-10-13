import React from 'react'

function Portfolio(){
    return (
        <div className='section portfolio'>
            <h1>Portfolio</h1>
            <div className='content'>
                <div className='image'>
                    <img src={require('../assets/project.jfif')} />
                    <p><a href='#'>GitHub</a> &nbsp; <a href='#'>Website</a></p>
                </div>
                <div className='image'>
                    <img src={require('../assets/project.jfif')} />
                    <p><a href='#'>GitHub</a> &nbsp; <a href='#'>Website</a></p>
                </div>
                <div className='image'>
                    <img src={require('../assets/project.jfif')} />
                    <p><a href='#'>GitHub</a> &nbsp; <a href='#'>Website</a></p>
                </div>
                <div className='image'>
                    <img src={require('../assets/project.jfif')} />
                    <p><a href='#'>GitHub</a> &nbsp; <a href='#'>Website</a></p>
                </div>
                <div className='image'>
                    <img src={require('../assets/project.jfif')} />
                    <p><a href='#'>GitHub</a> &nbsp; <a href='#'>Website</a></p>
                </div>
                <div className='image'>
                    <img src={require('../assets/project.jfif')} />
                    <p><a href='#'>GitHub</a> &nbsp; <a href='#'>Website</a></p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;