import { Button } from '@chakra-ui/button';
import React from 'react';

const SolidButton = ({ size, w, children, ...props }) => {
  return (
    <Button
      _focus={{ border: 'none' }}
      variant='solid'
      size={size || 'sm'}
      w={w || '120px'}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SolidButton;
