import React from 'react';
import Header from "./header";
import Footer from "./footer";

interface NavigationWrapperProps{
    children: React.ReactNode;
}

const NavigationWrapper: React.FC<NavigationWrapperProps>=({children})=>{
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default NavigationWrapper;
