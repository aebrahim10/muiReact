import React from 'react'
import { FormControl, InputLabel, MenuItem, Select as MuiSelect, FormHelperText } from '@material-ui/core'

export default function Select(props) {
  const {name, label, value, onChange, options, error=null} = props
  return (
    <FormControl variant='outlined'
    {...(error && {error:true})}>
        <InputLabel>{label}</InputLabel>
        <MuiSelect name={name} value={value} label={label} onChange={onChange} >
            <MenuItem key="" value="">None</MenuItem>
            {
                options.map(option=>(<MenuItem key={option.id} value={option.id}>{option.title}</MenuItem>))
            }
        </MuiSelect>
        {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}