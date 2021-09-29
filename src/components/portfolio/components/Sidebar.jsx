import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import sidebarNav from '../data/sidebarData';
import { MdWork } from 'react-icons/md';

const Sidebar = () => {
  return (
    <VStack w='100%' spacing={5}>
      {sidebarNav.map((nav) => (
        <HStack w='100%' justifyContent='space-between '>
          <Box>{nav.icon}</Box>
          <Text w='80%'>{nav.title}</Text>
        </HStack>
      ))}
    </VStack>
  );
};

export default Sidebar;
