import React from 'react'
import aboutimage from '../images/about.png'
function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>UPCOMING EVENT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil laudantium assumenda vitae deleniti? Incidunt ea facere, ducimus ullam, assumenda, libero odit corrupti eaque sequi praesentium quidem amet aliquid consequuntur veniam.</p>
                <button>Read more</button>
            </div>
            <div className='about-image'>
                <img src={ aboutimage} alt='' />
            </div>

        </div >
    )
}

export default About
