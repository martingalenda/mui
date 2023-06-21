import { Typography, Box, Divider } from "@mui/material"
import AvatarMUI from "../componentes/dataDisplay/Avatar"
import BadgeMUI from "../componentes/dataDisplay/Badge"
/* import DividerMUI from "../componentes/dataDisplay/Divider" */
/* import ListMUI from "../componentes/dataDisplay/List" */
import TableMUI from "../componentes/dataDisplay/Table"
import TooltipMUI from "../componentes/dataDisplay/Tooltip"
import TypographyMUI from "../componentes/dataDisplay/Typography"
import SectionContainer from "../globals/SectionContainer"
import { Link } from "react-router-dom"; // Enrutado
import AdvancedTable from "../componentes/dataDisplay/AdvancedTable"

const DataDisplay = () => {
    return (
        <SectionContainer>

            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
                <Typography variant="h3" align="center">Avatar</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-avatar/" target="_blank">Doc</Link>
            </Box>
          <br/>
          <br/>
          <AvatarMUI/>
          <br/>
          <br/>
          <Divider/>
          <br/>

            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
                <Typography variant="h3" align="center">Badge</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-badge/" target="_blank">Doc</Link>
            </Box>
          <br/>
          <br/>
          <BadgeMUI/>
          <br/>
          <br/>
{/*           <Divider/>
          <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Divider</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-divider/" target="_blank">Doc</Link>
            </Box>
          <br/>
          <br/>
          <DividerMUI/>
          <br/>
          <br/> */}
{/*           <Divider/>
          <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">List</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-list/" target="_blank">Doc</Link>
            </Box>
          <br/>
          <br/>
          <ListMUI/>
          <br/>
          <br/> */}
          <Divider/>
          <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Table</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-table/" target="_blank">Doc</Link>
            </Box>
          <br/>
          <br/>
          <TableMUI/>
          <br/>
          <br/>
          <AdvancedTable/>
          <br/>
          <br/>
          <Divider/>
          <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Tooltip</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-tooltip/" target="_blank">Doc</Link>
            </Box>
                      <br/>
          <br/>
          <TooltipMUI/>
          <br/>
          <br/>
          <Divider/>
          <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Typography</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-typography/" target="_blank">Doc</Link>
            </Box>
                      <br/>
          <br/>
          <TypographyMUI/>
          <br/>
          <br/>
  {/*        <Divider/>
           <br/>

          <Typography align="center">
          Existen más relacionados a esta tematica, como ser: <br/> <br/>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-chip/" target="_blank">Chip</Link> <br/>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/icons/" target="_blank">Icons</Link> <br/>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/material-icons/" target="_blank">Material Icons</Link> <br/>
          </Typography> */}
          
          <br/>
          <br/>
        </SectionContainer>
    )
}

export default DataDisplay