import { Typography, Box } from "@mui/material"

const TypographyMUI = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography> p (default) </Typography>
            <Typography variant="h1"> H1 </Typography>
            <Typography variant="h2"> H2 </Typography>
            <Typography variant="h3"> H3 </Typography>
            <Typography variant="h4"> H4 </Typography>
            <Typography variant="h5"> H5 </Typography>
            <Typography variant="h6"> H6 </Typography>
            <Typography variant="subTitle1"> Sub Title 1 </Typography>
            <Typography variant="subTitle2"> Sub-title 2 </Typography>
            <Typography variant="body1"> Body 1 </Typography>
            <Typography variant="body2"> Body 2 </Typography>
            <Typography variant="button"> Button </Typography>
            <Typography variant="caption"> Caption </Typography>
            <Typography variant="overline"> Overline </Typography>
            <Typography variant="h1" component="p"> Parrafo con apariencia de h1 </Typography>
        </Box>
    )
}
 
export default TypographyMUI