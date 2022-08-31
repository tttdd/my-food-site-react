import {styled} from "@mui/system";
import TitleBlock from "./TitleBlock";
import BestBlock from "./BestBlock";

const HomeApp = () => {
    return (
        <HomeWrapper>
            <TitleBlock />
            <BestBlock />
        </HomeWrapper>
    )
}

const HomeWrapper=styled('div')`

`;

export default HomeApp
