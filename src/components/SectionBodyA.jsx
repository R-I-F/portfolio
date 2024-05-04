import React from 'react'
import '../../public/styles/sectionBodyA.css'
import dotSvg1 from '/dots-1.svg'
import dotSvg2 from '/dots-2.svg'
import zigzag1 from '/zigzag-1.svg'
import zigzag2 from '/zigzag-2.svg'
import circles from '/circles.svg'

export default function SectionBodyA({name}){
    return(
        <section 
        className='section-body-a-container'
        name = {name}>
            <div className='section-body-a'>
                <div className='body-a-block-a'>
                    <div className='body-a-block-a-info'>
                        <h1 className='body-a-title'>Design</h1>
                        <p>I focus on seamlessly integrating aesthetics with functionality to ensure a captivating yet user-friendly experience. By leveraging my expertise in dimensional thinking and 3D visualization, I prioritize creating homepage layouts that optimize both form and function.</p>
                        <img 
                        src = {dotSvg1}
                        className='body-a-dots-svg-1'
                        />
                    </div>
                    <div className='body-a-block-a-filler'>
                        <img 
                        src = {circles}
                        className='circles-svg'
                        />
                        <img 
                        src = {dotSvg2}
                        className='body-a-dots-svg-2'
                        />
                    </div>
                </div>
                <div className='body-a-block-b'>
                    <div className='body-a-block-b-filler'>
                        <img 
                        src = {circles}
                        className='circles-svg'
                        />
                        <img 
                        src = {zigzag2}
                        className='body-b-zigzag-svg-2'
                        />
                    </div>
                    <div className='body-a-block-b-info'>
                        <h1 className='body-a-title body-a-title-2'>Engineering</h1>
                        <p>Passionate about web development, I delved deep into complex algorithms, backend structures, and internet fundamentals. Alongside, I mastered a wide range of languages, libraries, and frameworks: JavaScript, React.js, Node.js, C#, SQL, Firebase, MongoDB, CSS, HTML, and OpenAI API integration.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}