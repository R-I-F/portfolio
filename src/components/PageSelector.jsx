import React from 'react'
import '../../public/styles/pageSelector.css'
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'


export default function PageSelector(){
    const [currentScrollpos, setCurrentScrollPos] = React.useState();
    const [selectedPage, setSelectedPage] = React.useState(1);
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
    function pageSetter(){
        console.log(`Pagesetter\t-\n\tcurrent scroll position ${currentScrollpos}`)
        if(currentScrollpos >= (0) && currentScrollpos< (1*viewportHeight)){
            setSelectedPage(1);
        } 
        else if(currentScrollpos>= (1*viewportHeight) && currentScrollpos< (2*viewportHeight)){
            setSelectedPage(2);
        } 
        else if(currentScrollpos>= (2*viewportHeight) && currentScrollpos< (3*viewportHeight)){
            setSelectedPage(3);
        } 
        else if(currentScrollpos>= (3*viewportHeight) && currentScrollpos< (4*viewportHeight)){
            setSelectedPage(4);
        } 
        else if(currentScrollpos>= (4*viewportHeight) && currentScrollpos< (5*viewportHeight)){
            setSelectedPage(5);
        } 
    }
    console.log(selectedPage)
    function altPageSetter(x){
        setSelectedPage(x);
    }
    
    React.useEffect(() => {
    
        // Registering the 'begin' event and logging it to the console when triggered.
        Events.scrollEvent.register('begin', (to, element) => {
            const currentTime = Date.now();
            console.log(`scrolling begin - ${currentTime-programStart}ms`)
        });
        
        // Registering the 'end' event and logging it to the console when triggered.
        Events.scrollEvent.register('end', (to, element) => {
            
            const currentTime = Date.now();
            // pageSetter();
            console.log(`scrolling end - ${currentTime-programStart}ms`)
        });
    
        // Updating scrollSpy when the component mounts.
        scrollSpy.update();
    
        // Returning a cleanup function to remove the registered events when the component unmounts.
        return () => {
          Events.scrollEvent.remove('begin');
          Events.scrollEvent.remove('end');
        };
      }, [currentScrollpos]);

    return(
        <div className='pageSelector'>

            <Link
            id = '1'
            className = {`shape-container  ${activeClassSetter(1)}`}
            onSetActive={() => altPageSetter(1)}
            to = {`section1`}
            offset={0}
            spy={true}
            smooth={true}
            duration={300}/>


            <Link
            id = '2'
            className = {`shape-container  ${activeClassSetter(2)}`}
            onSetActive={() => altPageSetter(2)}
            to = {`section2`}
            offset={0}
            spy={true}
            smooth={true}
            duration={300}/>

        <Link
            id = '3'
            className = {`shape-container  ${activeClassSetter(3)}`}
            onSetActive={() => altPageSetter(3)}
            to = {`section3`}
            offset={0}
            spy={true}
            smooth={true}
            duration={300}/>

        </div>
    )


}