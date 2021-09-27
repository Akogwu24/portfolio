import { Button } from '@chakra-ui/button';
import React from 'react';

const SolidButton = ({ children, ...props }) => {
  return (
    <Button
      _focus={{ border: 'none' }}
      variant='solid'
      size='sm'
      w='120px'
      {...props}
    >
      {children}
    </Button>
  );
};

export default SolidButton;
