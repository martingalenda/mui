import { Box, Typography, Divider } from "@mui/material"
import SectionContainer from "../globals/SectionContainer"
import { Link } from "react-router-dom"; // Enrutado
import ModalMUI from "../componentes/utils/Modal";
import TransitionMUI from "../componentes/utils/Transitions";
import UseMediaQueryMUI from "../componentes/utils/useMediaQuery";
import PopperMUI from "../componentes/utils/Popper";

const Utils = () => {
    return (
        <SectionContainer>
             <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Modal</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-modal/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <ModalMUI/>
            <br/>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Popper</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-popper/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <PopperMUI/>
            <br/>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Transition</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/transitions/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <TransitionMUI/>
            <br/>
            <br/>
            <Divider/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">useMediaQuery</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-use-media-query/" target="_blank">Doc</Link>
            </Box>
            <br/>
            <br/>
            <UseMediaQueryMUI/>
            <br/>
            <br/>
            <br/>
            <br/>
       </SectionContainer>
    )
}

export default Utils