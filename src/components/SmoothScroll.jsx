import React from 'react';
import { Link, Button, Element, scroller, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import ScrollDirectionDetector from './ScrollDirectionDetector';

export default function SmoothScroll({selectedPage, setSelectedPage}){
    let viewportHeight = window.innerHeight;
    const [currentPageSection, setCurrentPageSection] = React.useState(1);
    const [currentScrollpos, setCurrentScrollPos] = React.useState(0);
    const [isScrollingUp, setIsScrollingUp] = React.useState(false);
    const [isScrollingDown, setIsScrollingDown] = React.useState(false);
    const [shouldExecute, setShouldExecute] = React.useState(false);
    const [isIpadScreen, setIsIpadScreen] = React.useState(false);

    /* 
    4th                            scrollToNextSection()
    
    3rd                            setSelectedPage instant
    
    2nd    currentPageSection 20ms  isScrollingup (65ms)      isScrollingDown (65ms) 
    
    1st                            currentScrollPos instant

0   Zero                             detect screen type
    */

    React.useEffect(()=>{
        function handleOrientationChange() {
            if (window.innerHeight > window.innerWidth) {
                setIsIpadScreen(true);
            } else {
                setIsIpadScreen(false);
            }
        }
    
        function handleResize() {
            handleOrientationChange();
        }
    
        // Initial check
        handleOrientationChange();
    
        window.addEventListener('orientationchange', handleOrientationChange);
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('orientationchange', handleOrientationChange);
            window.removeEventListener('resize', handleResize);
        };
    },[])

    

    React.useEffect(() => {
        const handleScroll = () => {
                setCurrentScrollPos(window.scrollY);
                setShouldExecute(true);
        };
        window.addEventListener('scroll', handleScroll);

        /* 
            1st
            this useEffect sets a new scroll position whenever a scroll event happens 
        */
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    React.useEffect(()=>{
        let timeoutId;
        const pageSection = calcPageSection();
        function calcPageSection(){
            if(isIpadScreen){
                return(Math.round((currentScrollpos + 530) / viewportHeight) + 1 );
            }
            else{
                return ( Math.round((currentScrollpos) / viewportHeight) + 1 );
            }
        }
        timeoutId = setTimeout(()=>{
            setCurrentPageSection(pageSection);
        }, 20)

        /*
           2nd step
           this useEffect sets a new value for the current page section based on a calculation:
           floor(currentScrllpos / viewportHeight) + 1
           with a slight delay of 20ms
       */
           return () => {
            clearTimeout(timeoutId);
        };
    },[currentScrollpos])
    


    React.useEffect(()=>{
        let timeoutId ;
        timeoutId = setTimeout(()=>{
            const currentTime = Date.now();
            if(isScrollingDown || isScrollingUp){
                calcPageSection();
            }
        },0)
        /*
            3rd step
            this useEffect calculates page section 
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
        whenever the selectedPage Changes
        the function checks the selectedPage and then scrolls to the adjacent position
        */
    },[selectedPage])

    React.useEffect(() => {

        Events.scrollEvent.register('begin', (to, element) => {
        });
    
        Events.scrollEvent.register('end', (to, element) => {
            setShouldExecute(false);
            resetScroll()
        });
    
        scrollSpy.update();
    
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
        // console.log(`resetting scroll`)
        setIsScrollingDown(false);
        setIsScrollingUp(false);
        setShouldExecute(false);
   }

   function calcPageSection(){
        if(currentPageSection === 1){
            if(isScrollingDown){
                    if(selectedPage !== 2 && selectedPage !== 1){
                        resetScroll();
                        return;
                    }
                    else{
                        setSelectedPage(2);
                        resetScroll();
                        return;
                    }
                }            
            else if(isScrollingUp) {
                setSelectedPage(1);
                resetScroll();
                return;
            }
            else {
                setSelectedPage(1);
                return;
            }
        }

        else if(currentPageSection === 2){
            if(isScrollingDown){
                    // console.log('here is the bug')
                    if(selectedPage !== 3 && selectedPage !== 2){
                        resetScroll();
                        return;
                    }
                    else{
                        console.log(`\tisScrollingDown ? ${isScrollingDown}`)
                        console.log(`shouldExecute ? ${shouldExecute}`)
                        setSelectedPage(3);
                        resetScroll();
                        return;
                    }
            }
            else if(isScrollingUp){
                setSelectedPage(1);
                resetScroll();
                return;
            }
            else {
                setSelectedPage(2);
                return;
            }
        }

        else if(currentPageSection === 3){
            if(isScrollingDown){
                if(selectedPage !== 4 && selectedPage !== 3){
                    resetScroll();
                    return;
                }
                else{
                    setSelectedPage(4);
                    resetScroll();
                    return;
                }
            }
            else if(isScrollingUp){
                if(selectedPage !== 2 && selectedPage !== 3){
                    resetScroll();
                    return;
                }
                else{
                    setSelectedPage(2);
                    resetScroll();
                    return;
                }
            }
            else {
                setSelectedPage(3);
                return;
            }
        }

        else if(currentPageSection === 4){
            if(isScrollingDown){
                if(selectedPage !== 5 && selectedPage !== 4){
                    resetScroll();
                    return;
                }
                else{
                    setSelectedPage(5);
                    resetScroll();
                    return;
                }
            }
            else if(isScrollingUp){
                if(selectedPage !== 3 && selectedPage !== 4){
                    resetScroll();
                    return;
                }
                else{
                    setSelectedPage(3);
                    resetScroll();
                    return;
                }
            }
            else {
                setSelectedPage(4);
                resetScroll();
                return 4;
            }
        }

        else if(currentPageSection === 5 ){
            if(isScrollingUp){
                if(selectedPage !== 4 && selectedPage !== 5){
                    resetScroll();
                    return;
                }
                else{
                    setSelectedPage(4);
                    resetScroll();
                    return;
                }
            }
            else{
                setSelectedPage(5);
                resetScroll();
                return;
            }
        }

        else {
            console.log('\t\t\t\tcondition proximus')
            setSelectedPage(1);
            return 1;
        }
    }
        
    function scrollToNextSection(){
        const options = {
            duration: 300,
            smooth: true,
        }
        if( selectedPage === 1 ){
            scroller.scrollTo('section1', options)
        }
        else if( selectedPage === 2 ){
            scroller.scrollTo('section2', options)
        }
        else if( selectedPage === 3 ){
            scroller.scrollTo('section3', options)
        }
        else if( selectedPage === 4 ){
            scroller.scrollTo('section4', options)
        }
        else if( selectedPage === 5 ){
            scroller.scrollTo('section5', options)
        }
    }

    
    // console.log(`current scroll position ${currentScrollpos}`)
    // console.log(`current page section ${currentPageSection}`)
    // console.log(`next Page Section is ${nextSectionIndex}`)
    // console.log(`isScrollingUp ? ${isScrollingUp}`);
    // console.log(`isScrollingDown ? ${isScrollingDown}`)
    // console.log(`shouldExecute ? ${shouldExecute}`)
    // console.log(`selected page is \t ${selectedPage}`)
    // console.log(`is it Ipad vertical Screen ? ${isIpadScreen}`);
    return(<>
        <ScrollDirectionDetector 
        setIsScrollingUp={setIsScrollingUp}
        setIsScrollingDown={setIsScrollingDown}
        currentScrollpos = {currentScrollpos}
        shouldExecute = {shouldExecute}
        setShouldExecute={setShouldExecute}
        />
    </>)
}


