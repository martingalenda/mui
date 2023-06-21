import SectionContainer from "../globals/SectionContainer"
import { Box, Typography, Divider } from "@mui/material"
import BottomNav from "../componentes/navigation/BottomNav";
import BreadcrumbsMUI from "../componentes/navigation/Breadcrumbs";
import DrawerMUI from "../componentes/navigation/Drawer";
import LinkMUI from "../componentes/navigation/Link";
import MenuMUI from "../componentes/navigation/Menu";
import PaginationMUI from "../componentes/navigation/Pagination";
import StepsMUI from "../componentes/navigation/Steps";
import StepsV2 from "../componentes/navigation/Stepsv2";
import TabsMUI from "../componentes/navigation/Tabs";
import { Link } from "react-router-dom"; // Enrutado
import BtnMultiActions from "../componentes/navigation/BtnMultiActions";

const Navigation = () => {
    return (
        <SectionContainer>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Bottom Navigation</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-bottom-navigation/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <BottomNav/> 
            <br/>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Breadcrumbs</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-breadcrumbs/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <BreadcrumbsMUI/>
            <br/>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Drawer</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-drawer/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <DrawerMUI/>
            <br/>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Link</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-link/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <LinkMUI/>
            <br/>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Menu</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-menu/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <MenuMUI/>
            <br/>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Pagination</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-pagination/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <PaginationMUI/>
            <br/>
            <br/>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Speed Dial</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-speed-dial/" target="_blank">Doc</Link>
            </Box>
            <BtnMultiActions/>
            <br/>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Stepper</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-stepper/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <StepsMUI/>
            <br/>
            <br/>
           {/*  <StepsV2/> */}
            <br/>
            <br/>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Tabs</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-tabs/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <TabsMUI/>
            <br/>
            <br/>
       </SectionContainer>
    )
}

export default Navigation