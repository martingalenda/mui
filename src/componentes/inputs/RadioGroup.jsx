import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioMUI = () => {
    return (
      <>
        <br/>
                  <br/>
        <FormControl sx={{display: 'flex', alignItems: 'center'}}>
        <FormLabel color="secondary" id="demo-radio-buttons-group-label">Genero</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        {/* <FormControlLabel disabled value="xd" control={<Radio />} label="xd" /> */}
      </RadioGroup>
    </FormControl>
        </>
    )
}

export default RadioMUI