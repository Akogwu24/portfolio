import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import sidebarNav from '../data/sidebarData';

const Sidebar = () => {
  const { path, url } = useRouteMatch();

  return (
    <VStack w='100%' bg='gray.200' p={5} spacing={5}>
      {sidebarNav.map((nav) => (
        <Link to={`${url}${nav.link}`}>
          <HStack w='100%' justifyContent='space-between '>
            <Box>{nav.icon}</Box>
            <Text w='80%'>{nav.title}</Text>
          </HStack>
        </Link>
      ))}
    </VStack>
  );
};

export default Sidebar;
