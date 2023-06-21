import { Typography, Box } from "@mui/material"

const TypographyMUI = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography> p (default) </Typography>
            <br/>
            <Typography variant="h1"> H1 </Typography>
            <br/>
            <Typography variant="h2"> H2 </Typography>
            <br/>
            <Typography variant="h3"> H3 </Typography>
            <br/>
            <Typography variant="h4"> H4 </Typography>
            <br/>
            <Typography variant="h5"> H5 </Typography>
            <br/>
            <Typography variant="h6"> H6 </Typography>
            <br/>
            <Typography variant="subTitle1"> Sub Title 1 </Typography>
            <br/>
            <Typography variant="subTitle2"> Sub Title 2 </Typography>
            <br/>
            <Typography variant="body1"> Body 1 Regular </Typography>
            <br/>
            <Typography variant="body1"> Body 1 SemiBold </Typography>
            <br/>
            <Typography variant="body2"> Body 2 Regular</Typography>
            <br/>
            <Typography variant="body2"> Body 2 SemiBold</Typography>
            <br/>
            <Typography variant="button"> Button </Typography>
            <br/>
{/*             <Typography variant="caption"> Caption </Typography>
            <br/>
            <Typography variant="overline"> Overline </Typography> */}
{/*             <br/>
            <br/>
            <Typography variant="h1" component="p"> Parrafo con apariencia de H1 </Typography> */}
        </Box>
    )
}
 
export default TypographyMUI