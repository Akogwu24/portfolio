import React from 'react';
import { Box, Circle, HStack, Stack, Text, VStack } from '@chakra-ui/layout';
import ContentWrapper from '../common/Wrapper';
import { channels } from './components/ContactChannel';
import Form from './components/Form';
import { Tooltip } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box bg='gray.50' py={10}>
      <ContentWrapper>
        <Stack spacing={10}>
          <HStack justify='space-between'>
            {channels.map((channel) => (
              <VStack>
                <Tooltip placement='auto-start'o label={channel.meaning}>
                  <Circle
                    bordesRadius='50%'
                    bg='blue.50'
                    p={4}
                    border='1px solid #00000020'
                  >
                    {channel.icon}
                  </Circle>
                </Tooltip>
                <Text>{channel.title}</Text>
              </VStack>
            ))}
          </HStack>
          <Form />
        </Stack>
      </ContentWrapper>
    </Box>
  );
};

export default Contact;
