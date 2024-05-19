import React from 'react'
import '../styles/pageSelector.css'
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'


export default function PageSelector({homepageSection, setHomepageSection}){
    const [currentScrollpos, setCurrentScrollPos] = React.useState();

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
        
        Events.scrollEvent.register('begin', (to, element) => {
        });
        
        Events.scrollEvent.register('end', (to, element) => {
        });
        
        scrollSpy.update();
        
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, [currentScrollpos]);
    
    function activeClassSetter(zid){
        if(homepageSection === 6){
            return 'hidden';
        }
        else if(homepageSection === 3){
            if(zid === 3){
                return'square-green';
            }
            else{
                return 'rhombus-green';
            }
        }
        else if(homepageSection === zid){
            return 'square';
        }
        else return 'rhombus';
    }
    
    function handleActive(x){
        setHomepageSection(x);
    }
    // console.log(`selected page is \t ${homepageSection}`)

    return(
        <div className='pageSelector'>

            <button
            id = '1'
            className = {`shape-container  ${activeClassSetter(1)}`}
            onClick={() => handleActive(1)}
            />

            <button
            className = {`shape-container  ${activeClassSetter(2)}`}
            onClick={() => handleActive(2)}
            />

            <button
            id = '3'
            className = {`shape-container  ${activeClassSetter(3)}`}
            onClick={() => handleActive(3)}
            />

            <button
            id = '4'
            className = {`shape-container  ${activeClassSetter(4)}`}
            onClick={() => handleActive(4)}
            />

            <button
            id = '5'
            className = {`shape-container  ${activeClassSetter(5)}`}
            onClick={() => handleActive(5)}
            />

        </div>
    )
}