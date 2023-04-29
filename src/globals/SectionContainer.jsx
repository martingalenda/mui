import { Box } from "@mui/material"
import PropTypes from 'prop-types';

const SectionContainer = ({children}) => {
    return (
        <Box sx={{pt: '6em'}}>
            {children}
        </Box>
    )
}

SectionContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SectionContainer