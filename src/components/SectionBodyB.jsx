import React from 'react'
import '../../public/styles/sectionBodyB.css'
import projects from '/projects.svg'

export default function SectionBodyB({name}){
    
    return(
        <section 
        className='section-body-b'
        name = {name}>
            <div className='section-body-b-logo-container'>
                <img src={projects}/>
            </div>
            <div className='section-body-b-info-container'>
                <h1>Over the years</h1>
                <p>
                Transitioning from architecture engineering to the tech industry, I was captivated by the intricate world of algorithms. Beginning my journey with programming and computer science, I immersed myself in cryptography and Java, establishing a solid groundwork for my future endeavors.

                My foray into frontend development commenced with Scrimba, where I delved deep into HTML, CSS, and JavaScript, while also exploring cutting-edge technologies such as Firebase, AI engineering, and React. This immersive experience culminated in 'MyShop,' my inaugural project, serving as a testament to my evolving skills.

                Simultaneously, I dedicated myself to enhancing the online presence of a local nursery, 'SuperKidz,' crafting a dynamic and engaging webpage.

                Driven by an insatiable thirst for knowledge, I delved into databases through FreeCodeCamp, mastering tools like PostgreSQL and Bash scripting. Amidst this, I embarked on a parallel endeavor, developing a webpage for the Cairo Greifswald Neurosurgery internship program, 'CG-FNE,' further enriching my skill set and expanding my portfolio.

                Fuelled by ambition, I ventured into backend development, leveraging resources like FreeCodeCamp and 'Beginning Node.' Although my primary focus remained on frontend proficiency, I concurrently honed my backend skills, thus ensuring a well-rounded expertise in both realms.
                </p>
            </div>
        </section>
    )
}