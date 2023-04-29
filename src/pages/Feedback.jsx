import { Typography, Box, Divider} from "@mui/material"
import SectionContainer from "../globals/SectionContainer"
import AlertMUI from "../componentes/feedback/Alert";
import DialogMUI from "../componentes/feedback/Dialog";
import ProgressMUI from "../componentes/feedback/Progress";
import NotificationsMUI from "../componentes/feedback/Notifications";
import { Link } from "react-router-dom"; // Enrutado
import DialogConfirm from "../componentes/feedback/DialogConfirm";
import DialogScroll from "../componentes/feedback/DialogScroll";

const FeedbackMUI = () => {
    return (
        <SectionContainer>
        <Box sx={{textAlign: 'center'}} component="section">
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Alerts</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-alert/" target="_blank">Doc</Link>
            </Box>
          <br/>
          <br/>
          <AlertMUI/>
          <br/>
          <br/>
          <Divider/>
          <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Dialog</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-dialog/" target="_blank">Doc</Link>
            </Box>
          <br/>
          <br/>
          <DialogMUI/>
          <br/>
          <br/>
          <DialogConfirm/>
          <br/>
          <br/>
          <br/>
          <DialogScroll/>
          <br/>
          <br/>
          <br/>
          <Divider/>
          <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Progress</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-progress/" target="_blank">Doc</Link>
            </Box>
          <br/>
          <br/>
          <ProgressMUI/>
          <br/>
          <br/>
          <Divider/>
          <br/>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
            <Typography variant="h3" align="center">Notifications (Snackbar)</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-snackbar/" target="_blank">Doc</Link>
            </Box>
          <br/>
          <br/>
          <NotificationsMUI/>
          <br/>
          <br/>
          <br/>
          <Divider/>
          <br/>
          <br/>
          <Typography align="center">
          Existen más relacionados a esta tematica, como ser: <br/>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-skeleton/" target="_blank">Skeleton</Link> <br/>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-backdrop/" target="_blank">Backdrop</Link> <br/>
          </Typography>
          <br/>
          <br/>
       </Box>
       </SectionContainer>
    )
}

export default FeedbackMUI