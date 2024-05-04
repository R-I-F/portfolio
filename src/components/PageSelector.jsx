import React from 'react'
import '../../public/styles/pageSelector.css'
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'


export default function PageSelector({selectedPage, setSelectedPage}){
    const [currentScrollpos, setCurrentScrollPos] = React.useState();
    // const [isLinkClicked, setIsLinkClicked] = React.useState(true);
    const viewportHeight = window.innerHeight;
    const programStart = Date.now();

    React.useEffect(() => {
        const handleScroll = () => {
            setCurrentScrollPos(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentScrollpos]);

    
    React.useEffect(() => {
        
        // Registering the 'begin' event and logging it to the console when triggered.
        Events.scrollEvent.register('begin', (to, element) => {
            const currentTime = Date.now();
            console.log(`scrolling begin - ${currentTime-programStart}ms`)
        });
        
        // Registering the 'end' event and logging it to the console when triggered.
        Events.scrollEvent.register('end', (to, element) => {
            const currentTime = Date.now();
            console.log(`scrolling end - ${currentTime-programStart}ms`)
            console.log(`\t${selectedPage}`);
        });
        
        // Updating scrollSpy when the component mounts.
        scrollSpy.update();
        
        // Returning a cleanup function to remove the registered events when the component unmounts.
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, [currentScrollpos]);
    
    function activeClassSetter(zid){
        if(selectedPage === 3){
            if(zid === 3){
                return'square-green'
            }
            else{
                return 'rhombus-green'
            }
        }

        else if(selectedPage === zid){
            return 'square'
        }
        else return 'rhombus'
    }
    
    function altPageSetter(x){
        setSelectedPage(x);
    }

    function handleActive(x){
        altPageSetter(x);
    }


    return(
        <div className='pageSelector'>

            <Link
            id = '1'
            className = {`shape-container  ${activeClassSetter(1)}`}
            to = {`section1`}
            onSetActive={() => handleActive(1)}
            offset={0}
            spy={true}
            smooth={true}
            duration={300}
            spyThrottle={500}/>


            <Link
            id = '2'
            className = {`shape-container  ${activeClassSetter(2)}`}
            to = {`section2`}
            onSetActive={ () => handleActive(2) }
            offset={1}
            spy={true}
            smooth={true}
            duration={300}
            spyThrottle={500}/>

        <Link
            id = '3'
            className = {`shape-container  ${activeClassSetter(3)}`}
            to = {`section3`}
            onSetActive={() => handleActive(3)}
            offset={0}
            spy={true}
            smooth={true}
            duration={300}
            spyThrottle={500}/>

        </div>
    )


}