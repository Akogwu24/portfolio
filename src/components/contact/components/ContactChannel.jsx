import { Box, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
import { IoLogoInstagram } from 'react-icons/io';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineGithub } from 'react-icons/ai';

const ContactChannel = ({ icon, title }) => {
  return (
    <Stack>
      <Box>{icon}</Box>
      <Text>{title}</Text>
    </Stack>
  );
};

export default ContactChannel;

export const channels = [
  {
    id: 1,
    title: '+234-816-803-5893',
    meaning: 'Phone Number',
    icon: <FiPhoneCall size={20} />,
  },
  {
    id: 2,
    title: 'akogwu.emmanuel24@gmail.com',
    meaning: 'Gmail',
    icon: <SiGmail size={20} />,
  },
  {
    id: 3,
    title: 'Twitter handle',
    meaning: 'Twitter',
    icon: <FiTwitter size={20} />,
  },
  {
    id: 4,
    title: 'Linkdn handle',
    meaning: 'Linkd',
    icon: <GrLinkedinOption size={20} />,
  },
  {
    id: 5,
    title: 'GitHub username',
    meaning: 'Github',
    icon: <AiOutlineGithub size={20} />,
  },
];
