import React from 'react';
import { Box, HStack } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <HStack justify='space-between'>
      <Box fontFamily='Satisfy' fontSize='2rem' fontWeight='900'>
        Emaks
      </Box>
      <HStack spacing={10}>
        <li>
          <Link to='#'>Home</Link>
        </li>
        <li>
          <Link to='#'>Portfolio</Link>
        </li>
        <li>
          <Link to='#'>About Me </Link>
        </li>
        <li>
          <Link to='#'>Contact Me</Link>
        </li>
      </HStack>
    </HStack>
  );
};

export default Navbar;
