import { Typography, styled } from '@mui/material';
import React from 'react';
import ExplainSlider, {ExplainSliderProps} from "../ExplainSlider/ExplainSlider";

const explainSliderItem: ExplainSliderProps= {
    items: [
        {
            firstSlide: [
                {titleSlide: "что-то там", descriptionSlide: '', icon: <></>},
                {titleSlide: "что-то там", descriptionSlide: '', icon: <></>},
                {titleSlide: "что-то там", descriptionSlide: '', icon: <></>}
            ]
        }
    ]
}

const BestBlock=()=>{
    return (
        <BestBlockWrapper>
            <BestBlockTitle>
                <Typography variant={'h1'}>Почему мы лучшие?</Typography>
                <Typography variant={'caption'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</Typography>
            </BestBlockTitle>
            <ExplainSlider items={explainSliderItem}/>
        </BestBlockWrapper>
    )
}
const BestBlockWrapper=styled('div')`

`;

const BestBlockTitle =styled('div')`
    
`;
export default BestBlock;
