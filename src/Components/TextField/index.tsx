import * as React from 'react';
import TextField from '@mui/material/TextField'
import { FilledInputProps, IconButton, InputAdornment, InputProps, OutlinedInputProps } from '@mui/material';

type IInputField = {
  error: string | false | undefined,
  label: string,
  value: string,
  name: string, 
  icon: React.ReactNode,
  iconPosition: "start" | "end"
  variant: "standard" | "filled" | "outlined" | undefined,
  helperText: string | false | undefined,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField = ({ onChange, label, name, variant, value, icon, iconPosition, error} :IInputField) => {
  return (
    <>
      <TextField
        name={name}
        error={error}
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