import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Box, BoxProps, styled, Typography} from "@mui/material";
import { Pagination } from 'swiper';


type SliderItem = [
    firstSlider: {
    titleSlide: string,
    descriptionSlide: string,
    icon: React.ReactElement,
}
]
interface SliderItemProps extends SliderItem, Box {}
export interface ExplainSliderProps{
    items: SliderItem[]
}


const SliderItem=({items, ...props}:SliderItemProps)=>{
    return (
        <SliderItemWrapper {...props}>
            {items.map((item, index)=>{return (
                <>
                {item.icon}
                <div>
                    <Typography variant='h3'>{item.titleSlide}</Typography>
                    <Typography variant='caption' sx={{fontSize: '14px', lineHeight: '20px'}}>{item.descriptionSlide}</Typography>
                </div>
                </>
            )})}
        </SliderItemWrapper>
    )
}

const ExplainSlider=({items}: ExplainSliderProps)=>{
    const SliderBuild=React.useMemo(()=>getSliderValue(items), [items])
    return (
        <Swiper
            spaceBetween={50}
            modules={[Pagination]}
            direction={"vertical"}
            slidesPerView={3}
        >
            {items.map((item, index)=>{return (<SliderItem key={index} items={item[index]} />)})}
        </Swiper>
    )
}

const SliderItemWrapper=styled(Box)`
  width: 500px;
  height: 160px;
`;

const ExPlainSliderWrapper=styled('div')`

`;

export default ExplainSlider;
