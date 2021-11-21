import { FormControl } from '@chakra-ui/form-control';
import { Image } from '@chakra-ui/image';
import { Box, Flex } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';
import contactImage from '../../../assets/contact.jpg';
import SolidButton from '../../common/SolidButton';
import FormInput from './FormInput';
import { FiSend } from 'react-icons/fi';

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    alert('message sent');
    let payload = {
      fullName,
      emailSubject,
      email,
      message,
    };
    console.log('payload', payload);
    setFullName('');
  };
  return (
    <Flex gridGap={10}>
      <FormControl isRequired flex={1}>
        <FormInput
          value={fullName}
          setValue={setFullName}
          placeholder='John Doe'
          label='FULL NAME'
        />
        <FormInput
          value={emailSubject}
          setValue={setEmailSubject}
          placeholder='Subject'
          label='SUBJECT'
        />
        <FormInput
          placeholder='johnDoe@mail.com'
          value={email}
          setValue={setEmail}
          label='EMAIL'
        />
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
          leftIcon={<FiSend />}
          _hover={{ opacity: '0.6' }}
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
