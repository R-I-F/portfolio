import React from 'react'
import '../../public/styles/sectionBodyB.css'
import projects from '/projects.svg'

export default function SectionBodyB({name}){
    
    return(
        <section 
        className='section-body-b-container'
        name = {name}>
            <div 
            className='section-body-b'>
                <div className='section-body-b-info-container'>
                    <h1 className='body-b-title'>Over the years</h1>
                    <p>
                        My passion into frontend development began with Scrimba, where I delved deep into HTML, CSS, and JavaScript, while also exploring cutting-edge technologies such as Firebase, AI engineering, and React.
                    </p>
                    <p>
                        This immersive experience culminated in 'MyShop,' my inaugural project, serving as a testament to my evolving skills.
                    </p>
                    <p>
                        Simultaneously, I dedicated myself to enhancing the online presence of a local nursery, 'SuperKidz,' crafting a dynamic and engaging webpage.
                    </p>
                    <p>
                        Then, I delved into databases through FreeCodeCamp, learning tools like PostgreSQL and Bash scripting. Amidst this, I worked on a parallel project, developing a webpage for the Cairo Greifswald Neurosurgery internship program, 'CG-FNE,'.
                    </p>
                    <p>
                        Fuelled by ambition, I started learning about backend development, leveraging resources like FreeCodeCamp and 'Beginning Node.' Although my primary focus remained on frontend proficiency.
                    </p>
                </div>
                <div className='section-body-b-logo-container'>
                    <img src={projects}/>
                </div>
            </div>
        </section>
    )
}