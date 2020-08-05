import React from 'react';

import './About.css';

const About = React.memo(function About(props) {
    return (
        <div id="about" className="container fullscreen">
            <div className="row">
                <div className="col-lg-12">
                    <p>
                        Tobe frank, we want to do something new. Education and tution are becoming a luxury as passing day.
                        Dakara, we want to introduce this platform so that students and teachers can have a platform to search and provide knowledge
                        We have a long way ahead, but in the end, all we can do is walk and tatakai.
                    </p>
                </div>
            </div>
        </div>
    )
})

export default About;