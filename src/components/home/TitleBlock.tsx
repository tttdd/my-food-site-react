import {styled} from "@mui/system";
import {Button, Typography} from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import LeaveImage from "../icons/LeaveImage";
import VegetableImage from "../icons/VegetableImage";
import UserIcon from "../icons/UserIcon";
import StarIcon from "../icons/StarIcon";
import VegitableIcon from "../icons/VegitableIcon";

const TitleBlock = () => {
    return (
        <TitleBlockWrap>
            <TextBlock>
                <Typography variant='h1' sx={{marginBottom: '20px'}}>
                    Organic Fruit & Vegetables
                </Typography>
                <Typography variant='caption' sx={{maxWidth: '640px', textAlign: 'center'}} >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...
                </Typography>
                <LeaveImageWrap>
                    <LeaveImage />
                </LeaveImageWrap>
                    <OrderButton variant='text'>
                        <>
                            заказать
                            <ArrowCircleRightIcon />
                        </>
                    </OrderButton>
            </TextBlock>
            <RatingBlock>
                <VegetableImage />
                <ScoreBlock>
                    <UserBlock>
                        <UserIcon />
                        <Description>
                            <Typography variant={'h2'}>30K</Typography>
                            <Typography variant={'subtitle1'}>Заказов</Typography>
                        </Description>
                    </UserBlock>
                    <StarBlock>
                        <StarIcon />
                        <Description>
                            <Typography variant={'h2'}>20K</Typography>
                            <Typography variant={'subtitle1'}>Оценок(4.8)</Typography>
                        </Description>
                    </StarBlock>
                    <ItemsBlock>
                        <VegitableIcon />
                        <Description>
                            <Typography variant={'h2'}>300</Typography>
                            <Typography variant={'subtitle1'}>Продуктов и блюд</Typography>
                        </Description>
                    </ItemsBlock>
                </ScoreBlock>
            </RatingBlock>
        </TitleBlockWrap>
    )
}
const TitleBlockWrap=styled('div')`
  position:relative;
`;
const RatingBlock=styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Description=styled('div')`
`;
const ScoreBlock=styled('div')`
    >div{
      margin-top: 37px;
    }
`;
const UserBlock=styled('div')`
  display: flex;
`;
const StarBlock=styled('div')`
  display: flex;
`;
const ItemsBlock=styled('div')`
    display: flex;
`;
const OrderButton=styled(Button)`
  margin-top: 37px;
`;
const TextBlock=styled('div')`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 137px;
`;
const LeaveImageWrap=styled('div')`
  opacity: 0.6;
  position: absolute;
  bottom: -20px;
`;

export default TitleBlock
