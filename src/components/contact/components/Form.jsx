import { FormControl } from '@chakra-ui/form-control';
import { Image } from '@chakra-ui/image';
import { Box, Flex } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/react';
import React from 'react';
import contactImage from '../../../assets/contact.jpg';
import SolidButton from '../../common/SolidButton';
import FormInput from './FormInput';

const Form = () => {
  const handleSend = () => {
    alert('message sent');
  };
  return (
    <Flex gridGap={10}>
      <FormControl isRequired flex={1}>
        <FormInput placeholder='John Doe' label='FULL NAME' />
        <FormInput placeholder='Subject' label='SUBJECT' />
        <FormInput placeholder='johnDoe@mail.com' label='EMAIL' />
        <Textarea
          _focus={{ bg: '#EEEDE7' }}
          my={4}
          rows={3}
          resize='none'
          placeholder='enter your message here'
        />
        <SolidButton
          onClick={handleSend}
          size='md'
          color='#fff'
          w={['100%', '100%', '200px']}
          bg='myColor.secondary'
        >
          Send Message
        </SolidButton>
      </FormControl>
      <Box flex={1}>
        <Image borderRadius='5px' src={contactImage} alt='reach out' />
      </Box>
    </Flex>
  );
};

export default Form;
