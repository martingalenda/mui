import { Box, Typography, Divider } from "@mui/material"
import SectionContainer from "../globals/SectionContainer" 
import { Link } from "react-router-dom"; // Enrutado
import BoxMUI from "../componentes/layout/Box";
import ContainerMUI from "../componentes/layout/Container";
import GridMUI from "../componentes/layout/Grid";
import Gridv2 from "../componentes/layout/Gridv2";
import StackMUI from "../componentes/layout/Stack";
import ImageListMUI from "../componentes/layout/ImageList";

const Layout = () => {
    return (
        <SectionContainer>
             <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Box</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-box/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <BoxMUI/>
            <br/>
            <br/>
            <Divider/> 
            <br/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Container</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-container/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <ContainerMUI/>
            <br/>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Grid</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-grid/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <GridMUI/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Grid v2</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-grid2/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <Gridv2/>
            <br/>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Stack</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-stack/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <StackMUI/>
            <br/>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Image List</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-image-list/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <ImageListMUI/>
            <br/>
            <br/>
            <br/>
       </SectionContainer>
    )
}

export default Layout