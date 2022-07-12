import React, { useState, useEffect } from 'react';
import Header from './header/header';
import CreditOption from './creditOption/creditOption';
const getSize = () => {
	const currentSize = document.getElementsByTagName('body')[0].clientWidth;
	return currentSize < 775 ? 1 : 0;
};

const Landing = () => {
    const [version, setVersion] = useState(getSize());
    useEffect(() => {
        window.addEventListener('resize', () => setVersion(getSize()));
        return () => {
            window.removeEventListener('resize', () => setVersion(getSize()));
        }
    }  , []);
    console.log(version);
    return (
        <>
            <Header estado={version}/>
            <CreditOption/>
        {/* <Header estado={version}/> */}
        {/* <Header estado={version}/> */}
        </>
    );
}
export default Landing;