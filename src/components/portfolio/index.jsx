import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import ContentWrapper from '../common/Wrapper';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

const index = () => {
  return (
    <Box bg='gray.400' pt={40}>
      <ContentWrapper>
        <Box textAlign='center'>
          <Heading>porftfolio</Heading>
          <Text>About me</Text>
        </Box>
        <HStack bg='telegram.300'>
          <Flex flex='1' bg='red'>
            <Sidebar />
          </Flex>
          <Box flex='3'>
            <Content />
          </Box>
        </HStack>
      </ContentWrapper>
    </Box>
  );
};

export default index;
