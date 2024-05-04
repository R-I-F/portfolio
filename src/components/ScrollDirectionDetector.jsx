import React, { useEffect, useState } from 'react';

function ScrollDirectionDetector({setIsScrollingUp, setIsScrollingDown, currentScrollpos, setNextSectionIndex, shouldExecute, setShouldExecute, programStart}) {
    // setShouldExecute(false);
    useEffect(() => {

        let lastScrollTop = window.scrollY;
        
        const handleScroll = () => { 

            let scrollTop = window.scrollY;
            let currentTime = Date.now()
            // console.log(`2nd useEffect ${currentTime-programStart}ms\nHandlingScroll - \n\tCurrent Scrollposition = ${scrollTop} > Last Scroll Position = ${currentScrollpos} ?`)
            if ((scrollTop - lastScrollTop)> 30){
                // console.log('\tscrolling down')
                setIsScrollingUp(false);
                setIsScrollingDown(true);
                setShouldExecute(false);
            } else if ((scrollTop - lastScrollTop) < -30 ) {
                // console.log('\tscrolling up')
                setIsScrollingUp(true);
                setIsScrollingDown(false);
                setShouldExecute(false);
            }
            else{
                resetScroll();
            }
            lastScrollTop = scrollTop;
        };
        
        let scrollTimeout;
        const scrollListener = () => {
            if (shouldExecute) {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    handleScroll();
                }, 65);
            }
        };
        scrollListener();
        return () => {
            clearTimeout(scrollTimeout);
        };

    }, [shouldExecute]); // Empty dependency array to run the effect only once when the component mounts

    useEffect(() => {
        let falseSetterTimeout;
            falseSetterTimeout = setTimeout(() => {
                // console.log('buffering timeout logging, scroll reset');
                setShouldExecute(false);
                // console.log(`2nd useEffect - ${currentTime-programStart}\n\t shouldExecute = ${shouldExecute}`)
            }, 100);

        return () => {
            clearTimeout(falseSetterTimeout);
        };
    }, [window.scrollY]);

    // React.useEffect(()=>{
    //     console.log(`resetting should execute on scroll events`)
    //     let resetTimeout;
    //     clearTimeout(resetTimeout);
    //     function resetShouldExecute(){
    //         resetTimeout = setTimeout(()=>{
    //             setShouldExecute(false);
    //         },100)

    //     }
    //     window.addEventListener('scroll', resetShouldExecute)
    //     return()=>{
    //         window.removeEventListener('scroll', resetShouldExecute);
    //         clearTimeout(resetTimeout);
    //     }
    // },[window.scrollY])
    

    function resetScroll(){
        setIsScrollingDown(false);
        setIsScrollingUp(false);
   }

    return null; 
}

export default ScrollDirectionDetector;
