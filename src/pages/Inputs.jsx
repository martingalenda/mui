import SectionContainer from "../globals/SectionContainer";
import Buttons from "../componentes/inputs/Buttons";
import CheckBox from "../componentes/inputs/Checkbox";
import SwitchMUI from "../componentes/inputs/Switch";
import InputsTxt from "../componentes/inputs/InputsTxt";
import RadioMUI from "../componentes/inputs/RadioGroup";
import SelectMUI from "../componentes/inputs/Select";
import { Typography, Box, Divider } from "@mui/material"
import { Link } from "react-router-dom"; // Enrutado


const Inputs = () => {
    return ( 


        <SectionContainer>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
                <Typography variant="h3" align="center">Buttons</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-button/" target="_blank">Doc</Link>
            </Box>
          <Buttons/>

          <br/>
          <br/>
          <Divider/>
          <br/>
          <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
                <Typography variant="h3" align="center">Checkbox</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-checkbox/" target="_blank">Doc</Link>
            </Box>
            <CheckBox/>
      


          <Divider/>
          <br/>
          <br/>

          <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
              <Typography variant="h3" align="center">Radio</Typography>
              <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-radio-button/" target="_blank">Doc</Link>
          </Box>
          <RadioMUI/>
              
          <br/>
          <br/>

          <Divider/>
          <br/>

            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
                <Typography variant="h3" align="center">Switch</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-switch/" target="_blank">Doc</Link>
            </Box>
          <SwitchMUI/>
          
          <br/>
          <br/>
          <Divider/>
          <br/>

            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
                <Typography variant="h3" align="center">Select</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-select/" target="_blank">Doc</Link>
            </Box>
          <SelectMUI/>

          <br/>
          <br/>
          <Divider/>
          <br/>
          
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
                <Typography variant="h3" align="center">Inputs</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-text-field/" target="_blank">Doc</Link>
            </Box>
          <InputsTxt/>
  
          <br/>
          <br/>
          <br/>
          {/*
          <Divider/>

          <br/>

           <Typography align="center">
          Existen muchos más relacionados a esta tematica, como ser: <br/>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-button-group/" target="_blank">Button group</Link> <br/>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-rating/" target="_blank">Raiting</Link> <br/>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-slider/" target="_blank">Slider select</Link> <br/>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-transfer-list/" target="_blank">Transfer List</Link> <br/>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-toggle-button/" target="_blank">Toggle Button</Link>
          </Typography> */}
          
          <br/>
          <br/>
        </SectionContainer>
    )
}

export default Inputs