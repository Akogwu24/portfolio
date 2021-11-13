import { FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import React from 'react';

const FormInput = ({ type, label, value, placeholder, setValue }) => {
  return (
    <>
      <FormLabel fontSize='14px' opacity='0.8'>
        {label}
      </FormLabel>
      <Input
        _focus={{ bg: '#EEEDE7' }}
        border='none'
        borderRadius={0}
        borderBottom='1px solid #BDBDBD'
        mb='20px'
        value={value}
        setValue={(e) => setValue(e.target.value)}
        type={type || 'text'}
        placeholder={placeholder}
      />
    </>
  );
};

export default FormInput;
