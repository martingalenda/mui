import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationMUI = () => {
    return (
        <>
            <Stack sx={{width: '70%', m: 'auto', alignItems: 'center'}} spacing={2}>
              <Pagination sx={{justifyContent: 'center'}} count={10} />
              <Pagination sx={{justifyContent: 'center'}} count={10} color="primary" />
              <Pagination sx={{justifyContent: 'center'}} count={10} color="secondary" />
              <Pagination sx={{justifyContent: 'center'}} count={10} disabled />
            </Stack>
        </>
    )
}

export default PaginationMUI 