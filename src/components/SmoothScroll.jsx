import React from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import ScrollDirectionDetector from './ScrollDirectionDetector';

export default function SmoothScroll(){
    let viewportHeight = window.innerHeight;
    const [currentPageSection, setCurrentPageSection] = React.useState(1);
    const [currentScrollpos, setCurrentScrollPos] = React.useState(0);
    const [isScrollingUp, setIsScrollingUp] = React.useState(false);
    const [isScrollingDown, setIsScrollingDown] = React.useState(false);
    const [shouldExecute, setShouldExecute] = React.useState(false);
    const [nextSectionIndex, setNextSectionIndex] = React.useState(1);
    const programStart = Date.now();
    /* 
    4th                            scrollToNextSection()
    
    3rd                            nextSectionIndex 80ms
    
    2nd    currentPageSection 20ms  isScrollingup (65ms)      isScrollingDown (65ms) 
    
    1st                            currentScrollPos instant
    
    */

    React.useEffect(() => {
        let timeoutId;
        const currentTime = Date.now()
        // console.log(`1st useEffect\t${currentTime-programStart}\n\t current scroll position is: ${currentScrollpos}`)
        const handleScroll = () => {
                setCurrentScrollPos(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        /* 
            1st
            this useEffect sets a new scroll position whenever a scroll event happens 
        */

        const pageSection = Math.round((currentScrollpos) / viewportHeight) + 1;
        timeoutId = setTimeout(()=>{
            setCurrentPageSection(pageSection);
            const currentTime = Date.now() 
            // console.log(`2nd useEffect -\t${currentTime-programStart}ms \n\tcurrent page is ${currentPageSection}`);
        }, 20)

        /*
           2nd step
           this useEffect sets a new value for the current page section based on a calculation:
           floor(currentScrllpos / viewportHeight) + 1
           with a slight delay of 20ms
       */
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, [currentScrollpos]);
    


    React.useEffect(()=>{
        let timeoutId ;
        timeoutId = setTimeout(()=>{
            const currentTime = Date.now();
            // console.log(`3rd useEffect -\t${currentTime-programStart}ms`);
            if(isScrollingDown || isScrollingUp){
                setNextSectionIndex(calcNextPageSectionIndex());
            }
        },80)
        /*
            3rd step
            this useEffect sets a new value for next section index 
            whenever scrolling up or down / should execute changes 
        */
       return () => {
        clearTimeout(timeoutId);
       };
    },[currentScrollpos])
    
    React.useEffect(()=>{
        scrollToNextSection()
        setShouldExecute(false)
        /* 
        4th
        this use effect invokes the scroll to next section function
        whenever the nextSectionIndex Changes
        the function checks the next section index and then scrolls to the adjacent position
        */
    },[nextSectionIndex])

    React.useEffect(() => {
    
        // Registering the 'begin' event and logging it to the console when triggered.
        Events.scrollEvent.register('begin', (to, element) => {
            console.log('begin')
        });
    
        // Registering the 'end' event and logging it to the console when triggered.
        Events.scrollEvent.register('end', (to, element) => {
            console.log('end')
            setShouldExecute(false);
            resetScroll()
        });
    
        // Updating scrollSpy when the component mounts.
        scrollSpy.update();
    
        // Returning a cleanup function to remove the registered events when the component unmounts.
        return () => {
          Events.scrollEvent.remove('begin');
          Events.scrollEvent.remove('end');
        };
      }, []);
    
    /*
    scroll action |current page index    |condition                       |scroll to
    1 -> 2        |   1                  |    isScrollingDown = true      |    1vh
    2 -> 3        |   2                  |    isScrollingDown = true      |    2vh
    3 -> 4        |   3                  |    isScrollingDown = true      |    3vh
    4 -> 5        |   4                  |    isScrollingDown = true      |    4vh
    
    2 -> 1        |   2                  |    isScrollingUp   = true      |    0vh
    3 -> 2        |   3                  |    isScrollingUp   = true      |    1vh
    4 -> 3        |   4                  |    isScrollingUp   = true      |    2vh
    5 -> 4        |   5                  |    isScrollingUp   = true      |    3vh
    */
    function resetScroll(){
        console.log(`resetting scroll`)
        setIsScrollingDown(false);
        setIsScrollingUp(false);
        setShouldExecute(false);
   }

   function calcNextPageSectionIndex(){
    // console.log('calculating Next Page section Index')
    // console.log(`\tcurrent page is ${currentPageSection}`);
    // console.log(`\tis Scrolling down ? ${isScrollingDown}`);
    // console.log(`\tis Scrolling up ? ${isScrollingUp}`);


        if(currentPageSection === 1){
            if(isScrollingDown === true){
                resetScroll();
                // console.log(`\t setting next page index to 2 `)
               return 2;
               
            }
            else if(isScrollingUp === true) {
                resetScroll();
                return 1;
            }
            else return 1;
        }
        else if(currentPageSection === 2){
            if(isScrollingDown === true){
                resetScroll();
                return 3;
            }
            // else if(currentScrollpos < (1.01 * viewportHeight) && currentScrollpos > (0.9 * viewportHeight)) {
            //     return 2;
            // }
            else if(isScrollingUp === true){
                resetScroll();
                return 1;
            }
            else return 2;
        }
        else if(currentPageSection === 3){
            if(isScrollingDown === true){
                resetScroll();
                return 4;
            }
            // else if(currentScrollpos < (2.01 * viewportHeight) && currentScrollpos > (1.9 * viewportHeight)) {
            //     return 3;
            // }
            else if(isScrollingUp === true){
                resetScroll();
                return 2;
            }
            else return 3;
        }
        else if(currentPageSection === 4){
            if(isScrollingDown === true){
                return 5;
            }
            // else if(currentScrollpos < (3.01 * viewportHeight) && currentScrollpos > (2.9 * viewportHeight)) {
            //     return 4;
            // }
            else if(isScrollingUp === true){
                return 3;
            }
            else return 4;
        }
        else if(currentPageSection === 5 && isScrollingDown === true){
            return 4;
        }
        else {
            console.log('\t\t\t\tcondition proximus')
            return 1;
        }

    }
    
    function scrollToNextSection(){
        // console.log(`scrolling to next section\n\t section${nextSectionIndex}`)
        const options = {
            duration: 300,
            smooth: true,
        }
        if( nextSectionIndex === 1 ){
            // console.log('1')
            scroll.scrollTo(0, options)
            // setNextSectionIndex(null);
            // setShouldExecute(false);
            // setIsScrollingDown(false);
            // setIsScrollingUp(false);
        }
        else if( nextSectionIndex === 2 ){
            // console.log('2')
            scroll.scrollTo((( 1 * viewportHeight)+1), options)
            setIsScrollingDown(false);
            setIsScrollingUp(false);
            // setNextSectionIndex(null);
        }
        else if( nextSectionIndex === 3 ){
            // console.log('3')
            scroll.scrollTo((( 2 * viewportHeight)+1), options)
            // setNextSectionIndex(null);
        }
        else if( nextSectionIndex === 4 ){
            // console.log('4')
            scroll.scrollTo((( 3 * viewportHeight)+1), options)
            // setNextSectionIndex(null);
        }
        else if( nextSectionIndex === 5 ){
            // console.log('5')
            scroll.scrollTo((( 4 * viewportHeight)+1), options)
            // setNextSectionIndex(null);
        }
    }

    
    // console.log(`current scroll position ${currentScrollpos}`)
    // console.log(`current page section ${currentPageSection}`)
    // console.log(`next Page Section is ${nextSectionIndex}`)
    // console.log(`isScrollingUp ? ${isScrollingUp}`);
    // console.log(`isScrollingDown ? ${isScrollingDown}`)
    console.log(`shouldExecute ? ${shouldExecute}`)

    return(<>
        <ScrollDirectionDetector 
        setIsScrollingUp={setIsScrollingUp}
        setIsScrollingDown={setIsScrollingDown}
        currentScrollpos = {currentScrollpos}
        setNextSectionIndex = {setNextSectionIndex}
        shouldExecute = {shouldExecute}
        setShouldExecute={setShouldExecute}
        programStart = {programStart}
        />
    </>)
}


