import React, { useEffect } from 'react';

function ScrollDirectionDetector({setIsScrollingUp, setIsScrollingDown, currentScrollpos, shouldExecute, setShouldExecute}) {
    useEffect(() => {

        let lastScrollTop = window.scrollY;
        
        const handleScroll = () => { 

            let scrollTop = window.scrollY;

            if ((scrollTop - lastScrollTop)> 30){
                // console.log('\tscrolling down')
                setIsScrollingUp(false);
                setIsScrollingDown(true);
                setShouldExecute(false);
            } 
            
            else if ((scrollTop - lastScrollTop) < -30 ) {
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

    }, [shouldExecute]); 

    useEffect(() => {
        let falseSetterTimeout;
            falseSetterTimeout = setTimeout(() => {
                setShouldExecute(false);
            }, 100);

        return () => {
            clearTimeout(falseSetterTimeout);
        };
    }, [window.scrollY]);

    function resetScroll(){
        setIsScrollingDown(false);
        setIsScrollingUp(false);
   }

    return null; 
}

export default ScrollDirectionDetector;
