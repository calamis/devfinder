import * as React from 'react';
import TextField from '@mui/material/TextField'
import { FilledInputProps, IconButton, InputAdornment, InputProps, OutlinedInputProps } from '@mui/material';

type IInputField = {
  label: string,
  value: string, 
  icon: React.ReactNode,
  iconPosition: "start" | "end"
  variant: "standard" | "filled" | "outlined" | undefined,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField = ({ onChange, label, variant, value, icon, iconPosition} :IInputField) => {
  return (
    <>
      <TextField
        fullWidth
        label={label}
        variant={variant}
        value={value}
        onChange={onChange}
        InputProps={{
          startAdornment: <InputAdornment position={iconPosition}>
            {icon}
        </InputAdornment>,
        }}
        
      >
      </TextField>
    </>
  )
}

export default InputField;