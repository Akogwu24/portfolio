import React from 'react';
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/layout';
import ContentWrapper from '../common/Wrapper';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
import { IoLogoInstagram } from 'react-icons/io';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineGithub } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box color='rgba(255,255,255, 0.8)' bg='myColor.secondary'>
      <ContentWrapper>
        <Box py={16}>
          <Flex py={10} justify='space-between'>
            <Stack maxW='45%'>
              <Heading>Akowgu Emmanuel</Heading>
              <Text>
                Designed with <span>&#10084;&#65039;</span> by a creative front
                end ninja
              </Text>
            </Stack>
            <Stack>
              <Heading>SOCIAL</Heading>
              <HStack spacing={5}>
                <IconContext.Provider value={{ className: 'social-icons' }}>
                  <Link to='/'>
                    <FiTwitter />
                  </Link>
                  <Link to='/'>
                    <AiOutlineGithub />
                  </Link>
                  <Link to='/'>
                    <IoLogoInstagram />
                  </Link>
                  <Link to='/'>
                    <GrLinkedinOption />
                  </Link>
                  <Link to='/'>
                    <FiFacebook />
                  </Link>
                </IconContext.Provider>
              </HStack>
            </Stack>
          </Flex>
          <Divider orientation='horizontal' opacity='0.1' />
        </Box>
      </ContentWrapper>
    </Box>
  );
};

export default Footer;
