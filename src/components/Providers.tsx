import {NextPage} from "next";
import {ThemeProvider} from "@mui/material";
import {customTheme} from "../../theme/theme";
import NavigationWrapper from "./navigation";
type Props = {
    children?: React.ReactNode
};
const Providers: React.FC<Props>=({children})=>{
    return(
        <ThemeProvider theme={customTheme}><NavigationWrapper>{children}</NavigationWrapper></ThemeProvider>
    )
}

export default Providers;
