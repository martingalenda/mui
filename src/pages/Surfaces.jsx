import SectionContainer from "../globals/SectionContainer";
import { Typography, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom"; // Enrutado
import AccordionMUI from "../componentes/surfaces/Accordion";
import AppBarMUI from "../componentes/surfaces/AppBar";
import CardMUI from "../componentes/surfaces/Card";
import PaperMUI from "../componentes/surfaces/Paper";

const Surface = () => {
    return (
        <SectionContainer>
          <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Accordion</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-accordion/" target="_blank">Doc</Link>
            </Box>
          <br/>
          <br/>
          <AccordionMUI/>
          <br/>
          <br/>
          <Divider/>
          <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">App Bar</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-app-bar/" target="_blank">Doc</Link>
            </Box>
          <br/>
          <br/>
          <AppBarMUI/>
          <br/>
          <br/>
          <Divider/>
          <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Card</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-card/" target="_blank">Doc</Link>
            </Box>
          <br/>
          <br/>
          <CardMUI/>
          <br/>
          <br/>
          <Divider/>
          <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Paper</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-paper/" target="_blank">Doc</Link>
            </Box>
          <br/>
          <br/>
          <PaperMUI/>
          <br/>
          <br/>

       </SectionContainer>
    )
}

export default Surface