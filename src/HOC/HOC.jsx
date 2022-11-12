import {Wrapper , FirstBanner , SecondBanner } from './style'
import React from "react";

const HOC = (height , ...components)=>{

    console.log('components' , components);
    const FirstComponent = components[0];
    const SecondComponent = components[1] || false;

    return class extends React.Component{
        render(){
            return (
                <Wrapper>
                    <FirstBanner height = {height}>
                        <FirstComponent/>
                    </FirstBanner>
                    {SecondComponent && <SecondBanner remHeight = {100-height}>
                        <SecondComponent/>
                    </SecondBanner> }
                    
                </Wrapper>
               
            )
        }
    }

}

export default HOC;
