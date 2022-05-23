import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid, Input, Select, MenuItem  } from '@material-ui/core';

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => (
          <TextField {...field}
            label={label}
            name={name}
            required={required}
            fullWidth
            >
            
          </TextField>
        )}
        defaultValue=""
        name={name}
        control={control}
        required={required}
      />
    </Grid>
  );
}

export default FormInput;