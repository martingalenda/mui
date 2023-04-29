import useMediaQuery from '@mui/material/useMediaQuery';

const UseMediaQueryMUI = () => {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <>
            <span style={{display: 'block', textAlign: 'center'}}>{`(min-width:600px) matches: ${matches}`}</span>
        </>
    )
}

export default UseMediaQueryMUI